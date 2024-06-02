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

const useStartSubscription = () => {

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async (planId: number, email: string, password: string) => {
        if (!isSupportedChain(chainId))
            return toast.error("Wrong network !", {
                position: "top-right",
            });

        if (!walletProvider)
            return toast.error("Please connect your wallet !", {
                position: "top-right",
            });

        if (email === "")
            return toast.error("Please enter your email !", {
                position: "top-right",
            });

        if (password === "")
            return toast.error("Please enter your password !", {
                position: "top-right",
            });

        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getSubscriptionContract(signer);

        const toastId = toast.loading("Processing...", {
            position: "top-right",
        });

        try {
            const transaction = await contract.startSubscription(planId, email, password);

            console.log("transaction: ", transaction);

            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                toast.dismiss(toastId);
                return toast.success("Subscription Started !", {
                    position: "top-right",
                });
            }

            toast.dismiss(toastId);
            toast.error("Subscription starting failed !", {
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

export default useStartSubscription