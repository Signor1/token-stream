/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getModalContract } from "@/constants/contracts";

const useGetTotalWithdrawal = () => {

    const [totalWithdraw, setTotalWithdraw] = useState<number | string>(0);
    const [withdrawCount, setWithdrawCount] = useState<number>(0);

    const fetchTotalWithdrawals = useCallback(async () => {
        try {
            const contract = getModalContract(readOnlyProvider);
            const res = await contract.getTotalWithdrawal();
            const converted = ethers.formatUnits(res, 18);
            setTotalWithdraw(converted);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingWithdrawals = useCallback(() => {
        setWithdrawCount((prevValue) => prevValue + 1);
        fetchTotalWithdrawals();
    }, [fetchTotalWithdrawals]);


    useEffect(() => {
        fetchTotalWithdrawals();

        const withdrawfilter = {
            address: import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
            topics: [
                ethers.id("WithdrawalSuccessful(address,uint256)")
            ],
        };

        wssProvider.getLogs({ ...withdrawfilter, fromBlock: 7787419 }).then((events) => {
            setWithdrawCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(withdrawfilter, trackingWithdrawals);

        return () => {
            // Perform cleanup
            provider.off(withdrawfilter, trackingWithdrawals);

        };

    }, [fetchTotalWithdrawals, trackingWithdrawals, withdrawCount]);

    return totalWithdraw;
}

export default useGetTotalWithdrawal