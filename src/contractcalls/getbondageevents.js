import { ethers } from "ethers";

/**
 *
 * Summary. Gets events Bound emitted by the Bondage Contract.
 *
 * Description. Returns the event arguments passed to emit the bond events starting at the specified block height.
 *
 * @param {Contract} bondageContract An instantiated bondage contract object using ethers
 * @param {string} fromBlock height of the block to start looking from
 * @return {?[]} array of events as {holder: string, provider: string, endpoint: string, numZap: BigNuber, numDots: BigNumber}
 */
export async function getBondEvents(bondageContract, fromBlock) {
   try {
      const filter = bondageContract.filters.Bound();
      const raw = await bondageContract.queryFilter(filter, fromBlock);
      // Taking out the args
      var retVal = raw.map((log) => {
         try {
            return {
               blockNumber: log.blockNumber,
               tsxHash: log.transactionHash,
               holder: log.args[0],
               provider: log.args[1],
               endpoint: ethers.utils.parseBytes32String(log.args[2]),
               numZap: log.args[3],
               numDots: log.args[4],
            };
         } catch (e) {
            console.log("Issue with parsing a bond event");
            console.log("Endpoint " + log.args[2]);
            console.error(e);
            return {
               blockNumber: 0,
               tsxHash: 0,
               holder: "",
               provider: "",
               endpoint: "",
               numZap: 0,
               numDots: 0,
            };
         }
      });
      console.log(retVal);
      return retVal;
   } catch (e) {
      console.log("Issue with getting bond events");
      console.error(e);
   }
   return [
      {
         blockNumber: 0,
         tsxHash: 0,
         holder: "",
         provider: "",
         endpoint: "",
         numZap: 0,
         numDots: 0,
      },
   ];
}

/**
 *
 * Summary. Gets events Unbound emitted by the Bondage Contract.
 *
 * Description. Returns the event arguments passed to emit the bond events starting at the specified block height with the amount of Zap associated with the unbond.
 *
 * @param {Contract} bondageContract An instantiated bondage contract object using ethers
 * @param {Contract} zapToken An instantiated zap token contract object using ethers
 * @param {string} fromBlock height of the block to start looking from
 * @return {?[]} array of events as {holder: string, provider: string, endpoint: string, numZap: BigNuber, numDots: BigNumber}
 */
export async function getUnbondEvents(bondageContract, zapToken, fromBlock) {
   try {
      const filter = bondageContract.filters.Unbound();
      const raw = await bondageContract.queryFilter(filter, fromBlock);
      const provider = zapToken.provider;
      // Taking out the args
      var retVal = [];
      for (var i = 0; i < raw.length; i += 1) {
         const log = raw[i];
         const tsxHash = log.transactionHash;
         const block = log.blockNumber;
         const tsx = await provider.getTransaction(tsxHash);
         const sender = tsx.from;
         const tokenFilter = zapToken.filters.Transfer(null, sender);
         const transEvent = await zapToken.queryFilter(
            tokenFilter,
            block,
            block
         );
         // console.log(transEvent[0].args[2]);
         retVal.push({
            blockNumber: log.blockNumber,
            tsxHash: log.transactionHash,
            holder: log.args[0],
            provider: log.args[1],
            endpoint: ethers.utils.parseBytes32String(log.args[2]),
            numDots: log.args[3],
            numZap: transEvent[0].args[2],
         });
      }
      // console.log(retVal);
      return retVal;
   } catch (e) {
      console.log("Issue with getting unbond events");
      console.error(e);
   }
   return ethers.BigNumber.from(0);
}

/**
 *
 * Summary. Calculate the total amount of Zap bonded in events.
 *
 * Description. Uses getBondEvents to get the events and then reduces the events to get the Zap amount bonded
 *
 * @param {Contract} bondageContract An instantiated bondage contract object using ethers
 * @param {string} fromBlock height of the block to start looking from
 * @return {number} total amount of weiZap bonded starting from the block specified
 */
export async function getBondVolume(bondageContract, fromBlock) {
   try {
      let events = await getBondEvents(bondageContract, fromBlock);
      // console.log(events);
      let weiVol = events.reduce((acc, curr) => {
         return acc.add(curr.numZap);
      }, ethers.BigNumber.from(0));
      // let vol = weiVol.div(ethers.constants.WeiPerEther);
      // var vol = parseFloat(weiVol.toString()),
      //    weiPerEth = ethers.constants.WeiPerEther.toNumber();

      // vol = vol / weiPerEth;
      return weiVol;
   } catch (e) {
      console.log("Issue with getting bond volume from events");
      console.error(e);
   }
   return ethers.BigNumber.from(0);
}

/**
 *
 * Summary. Calculate the total amount of Zap unbonded in events.
 *
 * Description. Uses getUnbondEvents to get the events and then reduces the events to get the Zap amount unbonded
 *
 * @param {Contract} bondageContract An instantiated bondage contract object using ethers
 * @param {Contract} zapToken An instantiated zap token contract object using ethers
 * @param {string} fromBlock height of the block to start looking from
 * @return {number} total amount of weiZap unbonded starting from the block specified
 */
export async function getUnbondVolume(bondageContract, ZapToken, fromBlock) {
   try {
      // let weiVol = events.reduce((acc, curr) => {
      //    console.log(curr.numZap.toString());
      //    return acc.add(curr.numZap);
      // }, ethers.BigNumber.from(0));

      // let vol = weiVol.div(ethers.constants.WeiPerEther);

      // console.log("UNBONDED: " + vol);

      let events = await getUnbondEvents(bondageContract, ZapToken, fromBlock);
      // console.log(events);

      let weiVol = events.reduce((acc, curr) => {
         // console.log(curr.numZap.toString());
         return acc.add(curr.numZap);
      }, ethers.BigNumber.from(0));

      // let vol = weiVol.div(ethers.constants.WeiPerEther);
      // var vol = parseFloat(weiVol.toString()),
      //    weiPerEth = ethers.constants.WeiPerEther.toNumber();
      // vol = vol / weiPerEth;

      return weiVol;
   } catch (e) {
      console.log("Issue with getting unbond volume from events");
      console.error(e);
   }
   return ethers.BigNumber.from(0);
}

/**
 *
 * Summary. Calculate the total amount of Zap bonded unbonded in events.
 *
 * Description. Uses getBondEvents and getUnbondEvents to get the events and then reduces the events to get the Zap amount unbonded
 *
 * @param {Contract} bondageContract An instantiated bondage contract object using ethers
 * @param {Contract} zapToken An instantiated zap token contract object using ethers
 * @param {string} fromBlock height of the block to start looking from
 * @return {Float} total amount of Zap bonded and unbonded starting from the block specified
 */
export async function getCombinedVolume(bondageContract, zapToken, fromBlock) {
   try {
      let bound = await getBondVolume(bondageContract, fromBlock);
      let unbound = await getUnbondVolume(bondageContract, zapToken, fromBlock);
      let weiTotal = bound.add(unbound);
      let weiStr = weiTotal.toString();
      let weiFl = parseFloat(weiStr);
      let weiPerEth = parseFloat(ethers.constants.WeiPerEther.toString());
      let total = weiFl / weiPerEth;
      return total;
   } catch (e) {
      console.log("Issue with getting total volume from events");
      console.error(e);
   }
   return ethers.BigNumber.from(0);
}

export async function getRecentBonds(bondageContract, fromBlock) {
   let events = await getBondEvents(bondageContract, fromBlock);
   console.log(events);
   events.sort((a, b) => b.blockNumber - a.blockNumber);
   var set = [];
   for (var i = 0; i < events.length; i++) {
      let curr = events[i];
      const check = (elem) => {
         return (
            elem.provider === curr.provider && elem.endpoint === curr.endpoint
         );
      };
      if (!set.some(check)) {
         set.push(curr);
      }
   }
   return set;
}
