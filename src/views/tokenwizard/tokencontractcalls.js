import {TOKENFACT_BYTES} from "./artifacts";
import { ethers } from 'ethers';




export async function InitTokenDotFactory(coord, factory, key, title, artifactName, artifact, signer) {
    switch(artifactName){
        case "TokenDotFactory":
            
            let bytesTitle = ethers.utils.formatBytes32String(title)

            const contractFactory = await new ethers.ContractFactory(artifact[0].abi, TOKENFACT_BYTES, signer);

            let contract = await contractFactory.deploy(coord, factory, key, bytesTitle);

            await contract.deployed()

            return contract

        case "SampleContest":
            break
        default:
          console.log("entered default switch")
    }
}

// export async function initCurve(specifier, symbol, curve, userAddress) {

//   let bytesSpecifier = ethers.utils.formatBytes32String(specifier)
//   let bytesSymbol = ethers.utils.formatBytes32String(symbol)

// }