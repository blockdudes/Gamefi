// import { getContract, prepareContractCall } from "thirdweb";
// import { BASKET_FACTORY_CONTRACT_ADDRESS } from "./constant";
// import { client, tenderlyMainnet } from "../thirdWebInfo";
// import { BasketInfo } from "../types/types";
// import { ethers } from "ethers";

// import {
//   basketTokenContractABI,
//   userBasketsContractABI,
//   basketFactoryContractABI,
//   TokenContractABI,
// } from "./constant";

// // export const basketFactoryContract = getContract({
// //     address: BASKET_FACTORY_CONTRACT_ADDRESS,
// //     abi: basketFactoryContractABI.abi as any,
// //     client: client,
// //     chain: tenderlyMainnet
// // });

// export const getBasketContract = (address: string, contract: string) => {
//   const abi: any =
//     contract === "FACTORY"
//       ? basketFactoryContractABI.abi
//       : contract === "BASKET"
//       ? basketTokenContractABI.abi
//       : userBasketsContractABI.abi;
//   return getContract({
//     address: address,
//     abi: abi,
//     client: client,
//     chain: tenderlyMainnet,
//   });
// };

// export const prepareTxForCreatingBasket = (
//   name: string,
//   symbol: string,
//   tokens: BasketInfo[],
//   isCreateBasketToken: boolean,
//   etherAmount: number
// ) => {
//   return prepareContractCall({
//     contract: getBasketContract(BASKET_FACTORY_CONTRACT_ADDRESS, "FACTORY"),
//     method: "createBasket",
//     params: [name, symbol, tokens, isCreateBasketToken],
//     value: isCreateBasketToken
//       ? BigInt(ethers.utils.parseEther(etherAmount.toString()).toString())
//       : BigInt(ethers.utils.parseEther("0").toString()),
//     gas: BigInt(10000000),
//   });
// };
