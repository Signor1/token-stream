/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { toast } from "sonner";
import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/constants/chain";
import { getModalContract } from "@/constants/contracts";
import { ethers } from "ethers";

const useWithdraw = (amount: number | string) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId))
      return toast.error("Wrong network !", {
        position: "top-right",
      });

    if (!walletProvider)
      return toast.error("Please connect your wallet !", {
        position: "top-right",
      });

    if (amount === 0 || amount === "")
      return toast.error("Please enter an amount !", {
        position: "top-right",
      });

    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getModalContract(signer);

    const formattedAmount = ethers.parseUnits(amount.toString(), 18);

    const toastId = toast.loading("Processing...", {
      position: "top-right",
    });

    try {
      const transaction = await contract.withdraw(formattedAmount);

      console.log("transaction: ", transaction);

      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        toast.dismiss(toastId);
        return toast.success("Withdrawal successful !", {
          position: "top-right",
        });
      }

      toast.dismiss(toastId);
      toast.error("Withdrawal failed !", {
        position: "top-right",
      });
    } catch (error: any) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error(`${error.message.slice(0, 20)}...`, {
        position: "top-right",
      });
    }
  }, [amount, chainId, walletProvider]);
};

export default useWithdraw;
