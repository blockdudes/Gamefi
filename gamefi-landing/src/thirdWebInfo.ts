import { defineChain } from "thirdweb/chains";
import { getRpcClient } from "thirdweb";
import { createThirdwebClient } from "thirdweb";

const clientId = process.env.THIRDWEB_CLIENT_ID;
export const tenderlyMainnet = defineChain({
  id: 13125,
  rpc: "https://virtual.mainnet.rpc.tenderly.co/04d3510d-01ad-4c97-9259-0bc2d169d87f",
  name: "Tenderly Mainnet",

  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
});

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});

export const rpcRequest = getRpcClient({
  client: client,
  chain: tenderlyMainnet,
});
