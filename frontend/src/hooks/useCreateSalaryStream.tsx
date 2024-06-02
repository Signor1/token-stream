/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { toast } from "sonner";
import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/constants/chain";
import { ZeroAddress, ethers } from "ethers";
import { getSalaryStreamContract } from "@/constants/contracts";
import { useNavigate } from "react-router-dom";

const useCreateSalaryStream = (
  address: any,
  csvData: any,
  streamInterval: string
) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const navigate = useNavigate();

  return useCallback(async () => {
    if (!isSupportedChain(chainId))
      return toast.error("Wrong network !", {
        position: "top-right",
      });

    if (address === ZeroAddress || !walletProvider)
      return toast.error("Please connect your wallet !", {
        position: "top-right",
      });

    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getSalaryStreamContract(signer);

    const formattedCsvData = csvData.map((item: any) => ({
      amount: ethers.parseUnits(item.amount, 18),
      recipient: item.recipient,
    }));

    const toastId = toast.loading("Processing...", {
      position: "top-right",
    });

    try {
      let interval;
      if (streamInterval === "daily") {
        interval = 1;
      } else if (streamInterval === "monthly") {
        interval = 2;
      } else {
        return toast.error("Invalid interval !", {
          position: "top-right",
        });
      }

      const transaction = await contract.createStream(
        formattedCsvData,
        interval
      );

      console.log("transaction: ", transaction);

      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);

      if (receipt.status) {
        toast.dismiss(toastId);
        navigate("/user/updatesalarystream");
        return toast.success("Salary stream created successfully !", {
          position: "top-right",
        });
      }

      toast.dismiss(toastId);
      toast.error("Salary stream creation failed !", {
        position: "top-right",
      });
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(`${error.message.slice(0, 20)}...`, {
        position: "top-right",
      });
    }
  }, [address, csvData, streamInterval, chainId, walletProvider, navigate]);
};

export default useCreateSalaryStream;
