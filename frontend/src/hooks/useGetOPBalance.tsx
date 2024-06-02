/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { getModalContract } from "@/constants/contracts";
import { ethers } from "ethers";


export const useGetOPBalance = (address: any) => {
    const [userBalance, setUserBalance] = useState<number | string>(0);
    const [depositCount, setDepositCount] = useState<number>(0);
    const [withdrawCount, setWithdrawCount] = useState<number>(0);
    const [feeCount, setFeeCount] = useState<number>(0);
    const [subCount, setSubCount] = useState<number>(0);

    const fetchUserOpBalance = useCallback(async () => {
        try {
            const contract = getModalContract(readOnlyProvider);
            const res = await contract.getBalances(address);
            const converted = ethers.formatUnits(res, 18);
            setUserBalance(converted);
        } catch (error) {
            console.error(error);
        }
    }, [address]);

    const trackingDeposit = useCallback(() => {
        setDepositCount((prevValue) => prevValue + 1);
        fetchUserOpBalance();
    }, [fetchUserOpBalance]);

    const trackingWithdraw = useCallback(() => {
        setWithdrawCount((prevValue) => prevValue + 1);
        fetchUserOpBalance();
    }, [fetchUserOpBalance])

    const trackingFee = useCallback(() => {
        setFeeCount((prevValue) => prevValue + 1);
        fetchUserOpBalance();
    }, [fetchUserOpBalance])

    const trackingSub = useCallback(() => {
        setSubCount((prevValue) => prevValue + 1);
        fetchUserOpBalance();
    }, [fetchUserOpBalance])


    useEffect(() => {
        fetchUserOpBalance();

        const depositfilter = {
            address: import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
            topics: [
                ethers.id("DepositSuccessful(address,uint256)")
            ],
        };

        wssProvider.getLogs({ ...depositfilter, fromBlock: 7787419 }).then((events) => {
            setDepositCount(events.length + 1);
        });

        const withdrawfilter = {
            address: import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
            topics: [
                ethers.id("WithdrawalSuccessful(address,uint256)")
            ],
        };

        wssProvider.getLogs({ ...withdrawfilter, fromBlock: 7787419 }).then((events) => {
            setWithdrawCount(events.length + 1);
        });

        const feefilter = {
            address: import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
            topics: [
                ethers.id("DeductionSuccessful(address,uint256)")
            ],
        };

        wssProvider.getLogs({ ...feefilter, fromBlock: 7787419 }).then((events) => {
            setFeeCount(events.length + 1);
        });

        const subfilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [
                ethers.id("SubscriptionStarted(address,uint256)")
            ],
        };

        wssProvider.getLogs({ ...subfilter, fromBlock: 7787519 }).then((events) => {
            setSubCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(depositfilter, trackingDeposit);

        provider.on(withdrawfilter, trackingWithdraw);

        provider.on(feefilter, trackingFee);

        provider.on(subfilter, trackingSub);

        return () => {
            // Perform cleanup
            provider.off(depositfilter, trackingDeposit);
            provider.off(withdrawfilter, trackingWithdraw);
            provider.off(feefilter, trackingFee);
            provider.off(subfilter, trackingSub);
        };

    }, [fetchUserOpBalance, trackingDeposit, depositCount, trackingWithdraw, withdrawCount, trackingFee, feeCount, trackingSub, subCount]);

    return userBalance;
}