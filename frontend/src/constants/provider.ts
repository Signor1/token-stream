/* eslint-disable @typescript-eslint/no-explicit-any */
import { ethers } from "ethers";

//when wallet is not connected, connects to the sepolia rpc
export const readOnlyProvider = new ethers.JsonRpcProvider(
  import.meta.env.VITE_RPC_URL
);

export const wssProvider = new ethers.WebSocketProvider(
  import.meta.env.VITE_WEB_SOCKET_RPC_URL
);

export const getProvider = (walletProvider: any) =>
  new ethers.BrowserProvider(walletProvider);
