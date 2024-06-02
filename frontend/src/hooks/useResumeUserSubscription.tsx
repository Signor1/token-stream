/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { toast } from "sonner";
import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/constants/chain";
import { getSubscriptionContract } from "@/constants/contracts";

const useResumeUserSubscription = () => {

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async (planId: number) => {
        if (!isSupportedChain(chainId))
            return toast.error("Wrong network !", {
                position: "top-right",
            });

        if (!walletProvider)
            return toast.error("Please connect your wallet !", {
                position: "top-right",
            });

        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getSubscriptionContract(signer);

        const toastId = toast.loading("Processing...", {
            position: "top-right",
        });

        try {
            const transaction = await contract.resumeSubscription(planId);

            console.log("transaction: ", transaction);

            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.dismiss(toastId);
                return toast.success("Subscription resumed!", {
                    position: "top-right",
                });
            }

            toast.dismiss(toastId);
            toast.error("Resuming of subscription failed !", {
                position: "top-right",
            });
        } catch (error: any) {
            console.error(error);
            toast.dismiss(toastId);
            toast.error(`${error.message.slice(0, 20)}...`, {
                position: "top-right",
            });
        }
    }, [chainId, walletProvider]);
}

export default useResumeUserSubscription