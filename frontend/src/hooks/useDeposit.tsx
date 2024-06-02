/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { toast } from "sonner";
import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/constants/chain";
import { getModalContract, getOPTokenContract } from "@/constants/contracts";
import { ethers } from "ethers";

const useDeposit = (amount: number | string) => {
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

    const tokenContract = getOPTokenContract(signer);

    const formattedAmount = ethers.parseUnits(amount.toString(), 18);

    const toastId = toast.loading("Processing...", {
      position: "top-right",
    });

    try {
      const tx = await tokenContract.approve(contract.target, formattedAmount);
      await tx.wait();

      toast.success("Approve Successful !", {
        position: "top-right",
      });

      const transaction = await contract.deposit(formattedAmount);

      console.log("transaction: ", transaction);

      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        toast.dismiss(toastId);
        return toast.success("Deposit successful !", {
          position: "top-right",
        });
      }

      toast.dismiss(toastId);
      toast.error("Deposit failed !", {
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

export default useDeposit;
