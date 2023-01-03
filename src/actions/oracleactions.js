import { redis, db, client, providerJsons, Redis } from "ioredis";
import { Oracle } from "src/reducers/classes/oracledata.js";
import { ethers } from "ethers";
import { registryAddress, registryAbi } from "src/contracts/registrycontract";
import { bondageAddress, bondageAbi } from "src/contracts/bondagecontract.js";
import { tokenDotFactoryAbi } from "src/contracts/tokendotfactorycontract.js";
import { erc20ABI } from "src/contracts/erc20.js";
import {
  zapTokenAddress,
  zapTokenAbi,
} from "src/contracts/zaptokencontract.js";
import { getCombinedVolume } from "src/contractcalls/getbondageevents.js";
import {
  getAllOracles as getOraclesFromRedis,
  saveOracles as saveOraclesToRedis,
} from "src/actions/redisactions";

// Types around the oracles
export const GET_ORACLES = "@market/get-oracles";
export const GET_ORACLES_ERROR = "@market/get-oracles-error";
export const UPDATE_ORACLE = "@market/update-oracle";
export const UPDATE_ORACLE_ERROR = "@market/update-oracle-error";
export const CLEAR_ORACLES = "@market/clear-oracles";
// Types around the volumes
export const UPDATE_TVL = "@market/update-tvl";
export const UPDATE_VOLUME = "@market/update-volume";
export const UPDATE_VOLUME_ERROR = "@market/update-volume-error";
// Types for full refresh
export const RESET_MARKET = "@market/reset";
export const RELOAD_MARKET = "@market/reload";

/**
 * To clear the oracles so that they can be refreshed completly
 */
export function clearOracles() {
  return {
    type: CLEAR_ORACLES,
    payload: null,
  };
}

/**
 * To clear the entire market store so that they can be refreshed completly
 */
export function clearMarket() {
  return {
    type: RESET_MARKET,
    payload: null,
  };
}

export function updateTvl(vol) {
  return {
    type: UPDATE_TVL,
    payload: vol,
  };
}

/**
 * Gets the total volume bonded and unbonded in Zap.
 *
 * @param {nuumber} fromBlock
 * @returns {object} obj.type === redux type obj.payload === volume bonded and unbonded in Zap
 */
export async function getVolumeTraded(fromBlock) {
  try {
    var tvl = 0;

    const chainId = parseInt(Number(window.ethereum.chainId), 10);

    let ethProvider = new ethers.providers.Web3Provider(window.ethereum);

    // Connection to Registry.sol
    const zapToken = new ethers.Contract(
      zapTokenAddress[chainId],
      zapTokenAbi,
      ethProvider
    );

    // Connection to Bondage.sol
    const bondageContract = new ethers.Contract(
      bondageAddress[chainId],
      bondageAbi,
      ethProvider
    );

    tvl = await getCombinedVolume(bondageContract, zapToken, fromBlock);

    return {
      type: UPDATE_VOLUME,
      payload: tvl,
    };
  } catch (e) {
    console.error(e);
    return {
      type: UPDATE_VOLUME_ERROR,
      payload: null,
    };
  }
}

/**
 * Gets and returns all Zap oracles to be stored
 *
 * @returns {object} obj.type === redux type obj.payload === info to store in redux
 */
export async function getOraclesFromBlockchain() {
  try {
    var oracles = [];

    const chainId = parseInt(Number(window.ethereum.chainId), 10);

    let ethProvider = new ethers.providers.Web3Provider(window.ethereum);

    // Connection to Registry.sol
    const registryContract = new ethers.Contract(
      registryAddress[chainId],
      registryAbi,
      ethProvider
    );

    // Connection to Bondage.sol
    const bondageContract = new ethers.Contract(
      bondageAddress[chainId],
      bondageAbi,
      ethProvider
    );

    // Fetch addresses
    const providerAddresses = await registryContract.getAllOracles();

    for (var i = 0; i < providerAddresses.length; i += 1) {
      const provider = providerAddresses[i];
      try {
        const title = await registryContract.getTitle(provider);
        const endpts = await registryContract.getProviderEndpoints(provider);

        const providerParams = await registryContract.getAllProviderParams(
          provider
        );

        for (var j = 0; j < endpts.length; j += 1) {
          const endpt = endpts[j],
            endptStr = ethers.utils.parseBytes32String(endpt);
          try {
            const dotsIssued = await bondageContract.getDotsIssued(
              provider,
              endpt
            );
            const dotLimit = await bondageContract.dotLimit(provider, endpt);
            const curve = await registryContract.getProviderCurve(
              provider,
              endpt
            );
            // const bound = await bondageContract.getBoundDots(
            //    provider,
            //    provider,
            //    endpt
            // );
            const userBound = await bondageContract.getBoundDots(
              window.ethereum.selectedAddress,
              provider,
              endpt
            );
            const cost = await bondageContract.calcZapForDots(
              provider,
              endpt,
              1
            );
            const zapBound = await bondageContract.getZapBound(provider, endpt);

            const broker = await registryContract.getEndpointBroker(
              provider,
              endpt
            );

            var tokenInfo = {
              isToken: false,
              symbol: "",
              tokenAdd: "",
              balance: 0,
              isTDFOwner: false,
            };
            if (provider === broker) {
              tokenInfo = await checkIfToken(
                ethProvider,
                provider,
                endpt,
                curve
              );
            }
            const {
              isToken,
              symbol,
              tokenAdd,
              balance,
              isTDFOwner,
            } = tokenInfo;

            var mdLink = "";
            try {
              const mdFile = endptStr + ".md";
              const toCheckMd = ethers.utils.formatBytes32String(mdFile);
              mdLink = providerParams.includes(toCheckMd)
                ? await registryContract.getProviderParameter(
                    provider,
                    toCheckMd
                  )
                : "";
            } catch (e) {
              console.error(e);
            }

            var jsonLink = "";
            try {
              const jsonSchema = endptStr + ".json";
              const toCheckJson = ethers.utils.formatBytes32String(jsonSchema);
              jsonLink = providerParams.includes(toCheckJson)
                ? await registryContract.getProviderParameter(
                    provider,
                    toCheckJson
                  )
                : "";
            } catch (e) {
              console.error(e);
            }

            const toAdd = new Oracle(
              ethers.utils.parseBytes32String(title),
              provider,
              providerParams,
              broker,
              curve.map((c) => {
                const s = c.toString();
                return parseFloat(s);
              }),
              endptStr,
              parseFloat(dotsIssued.toString()),
              parseFloat(dotsIssued.toString()),
              parseFloat(dotLimit.toString()),
              parseFloat(cost.toString()),
              mdLink === "" ? "" : ethers.utils.toUtf8String(mdLink),
              jsonLink === "" ? "" : ethers.utils.toUtf8String(jsonLink),
              parseFloat(userBound.toString()),
              parseFloat(zapBound.toString()),
              isToken,
              symbol,
              tokenAdd,
              parseFloat(balance.toString()),
              isTDFOwner
            );
            oracles.push(toAdd);
            saveOraclesToRedis(oracles);
          } catch (e) {
            console.error(e);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    return {
      type: GET_ORACLES,
      payload: oracles,
    };
  } catch (e) {
    console.error(e);
    return {
      type: GET_ORACLES_ERROR,
      payload: null,
    };
  }
}

export async function getOracles() {
  try {
    const oracles = await getOraclesFromRedis();

    if (oracles !== undefined && Array.isArray(oracles) && oracles.length > 0) {
      const oraclesJson = [];
      for (const oracle of oracles) {
        try {
          oracle = JSON.parse(oracle);
        } catch (error) {
          console.log("oracleToAdd error while parsing oracles", error);
        }
        if (oracle != undefined) {
          const newOracle = new Oracle(
            oracle.oracleTitle,
            oracle.oracleAddress,
            oracle.oracleParams,
            oracle.brokerAddress,
            oracle.coefficientArray.map((ele) => {
              return Number(ele);
            }),
            oracle.endpointName,
            oracle.dotsIssued,
            oracle.dotsIssued,
            oracle.dotLimit,
            oracle.pricePerDot,
            oracle.markdownLink,
            oracle.jsonSchema,
            "", //userBound,
            oracle.zapBound,
            oracle.isToken,
            oracle.symbol,
            oracle.tokenAdd,
            0, //parseFloat(balance.toString()),
            false //isTDFOwner
          );
          oraclesJson.push(newOracle);
        }
      }

      return {
        type: GET_ORACLES,
        payload: oraclesJson,
      };
    } else {
      return getOraclesFromBlockchain();
    }
  } catch (e) {
    console.error(e);
  }
}


/**
 *
 * Gets the latest data on an endpoint form the blockchain.
 *
 * @param {string} providerAddress address of the oracle endpoint provider
 * @param {string} endpointName name of the endpoint to be updated
 * @returns {object} obj.type === redux type obj.payload === info to store in redux
 */
export async function updateOracle(providerAddress, endpointName) {
  try {
    const chainId = parseInt(Number(window.ethereum.chainId), 10);

    let ethProvider = new ethers.providers.Web3Provider(window.ethereum);

    // Connection to Registry.sol
    const registryContract = new ethers.Contract(
      registryAddress[chainId],
      registryAbi,
      ethProvider
    );

    // Connection to Bondage.sol
    const bondageContract = new ethers.Contract(
      bondageAddress[chainId],
      bondageAbi,
      ethProvider
    );

    const provider = ethers.utils.getAddress(providerAddress),
      endpt = ethers.utils.formatBytes32String(endpointName);

    const title = await registryContract.getTitle(provider);

    const providerParams = await registryContract.getAllProviderParams(
      provider
    );

    var mdLink = "";
    try {
      const mdFile = endpointName + ".md";
      const toCheckMd = ethers.utils.formatBytes32String(mdFile);
      mdLink = providerParams.includes(toCheckMd)
        ? await registryContract.getProviderParameter(provider, toCheckMd)
        : "";
    } catch (e) {
      console.error(e);
    }

    var jsonLink = "";
    try {
      const jsonSchema = endpointName + ".json";
      const toCheckJson = ethers.utils.formatBytes32String(jsonSchema);
      jsonLink = providerParams.includes(toCheckJson)
        ? await registryContract.getProviderParameter(provider, toCheckJson)
        : "";
    } catch (e) {
      console.error(e);
    }

    const dotsIssued = await bondageContract.getDotsIssued(provider, endpt);
    const dotLimit = await bondageContract.dotLimit(provider, endpt);
    const curve = await registryContract.getProviderCurve(provider, endpt);

    const userBound = await bondageContract.getBoundDots(
      window.ethereum.selectedAddress,
      provider,
      endpt
    );

    const cost = await bondageContract.calcZapForDots(provider, endpt, 1);
    const zapBound = await bondageContract.getZapBound(provider, endpt);

    const broker = await registryContract.getEndpointBroker(provider, endpt);

    var tokenInfo = {
      isToken: false,
      symbol: "",
      tokenAdd: "",
      balance: 0,
      isTDFOwner: false,
    };
    if (provider === broker) {
      tokenInfo = await checkIfToken(ethProvider, provider, endpt, curve);
    }
    const { isToken, symbol, tokenAdd, balance, isTDFOwner } = tokenInfo;

    const toUpdate = new Oracle(
      ethers.utils.parseBytes32String(title),
      provider,
      providerParams,
      broker,
      curve.map((c) => {
        const s = c.toString();
        return parseFloat(s);
      }),
      endpointName,
      parseFloat(dotsIssued.toString()),
      parseFloat(dotsIssued.toString()),
      parseFloat(dotLimit.toString()),
      parseFloat(cost.toString()),
      mdLink === "" ? "" : ethers.utils.toUtf8String(mdLink),
      jsonLink === "" ? "" : ethers.utils.toUtf8String(jsonLink),
      parseFloat(userBound.toString()),
      parseFloat(zapBound.toString()),
      isToken,
      symbol,
      tokenAdd,
      parseFloat(balance.toString()),
      isTDFOwner
    );

    return {
      type: UPDATE_ORACLE,
      payload: toUpdate,
    };
  } catch (e) {
    console.error(e);

    return {
      type: UPDATE_ORACLE_ERROR,
      payload: null,
    };
  }
}

/**
 *
 * Checks if the endpoint in question is a token.
 *
 * @param {obj} ethProvider the current and active web3 provider
 * @param {string} provider address of the provider (assumed to be a TokenDotFactory)
 * @param {string} endpt name of the endpoint (assumed to be a token)
 * @returns {boolean} true === the endpoint is a token
 */
async function checkIfToken(ethProvider, provider, endpt) {
  var retVal = {
    isToken: false,
    symbol: "",
    tokenAdd: "",
    balance: 0,
    isTDFOwner: false,
  };
  try {
    // Connection to the released Token Dot Facotry
    const tokenDotFactory = new ethers.Contract(
      provider,
      tokenDotFactoryAbi,
      ethProvider
    );
    const tokenAdd = await tokenDotFactory.curves(endpt); // Returns an address
    const isToken = ethers.utils.isAddress(tokenAdd);

    if (!isToken) {
      return retVal;
    }
    retVal.isToken = true;
    retVal.tokenAdd = tokenAdd;
    retVal.isTDFOwner =
      ethers.utils.getAddress(window.ethereum.selectedAddress) ===
      (await tokenDotFactory.owner());
  } catch (e) {
    console.error(e);
    return retVal;
  }

  try {
    const token = new ethers.Contract(retVal.tokenAdd, erc20ABI, ethProvider);
    const symbol = await token.symbol();
    let trimmed;
    let index = symbol.search(String.fromCharCode(0));
    if (index !== -1) {
      trimmed = symbol.slice(0, index);
    } else {
      trimmed = symbol;
    }
    retVal.symbol = trimmed;
    retVal.balance = await token.balanceOf(window.ethereum.selectedAddress);
  } catch (e) {
    console.error(e);
  }
  return retVal;
}
