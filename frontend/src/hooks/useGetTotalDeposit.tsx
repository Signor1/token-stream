/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getModalContract } from "@/constants/contracts";

const useGetTotalDeposit = () => {

    const [totalDeposit, setTotalDeposit] = useState<number | string>(0);
    const [depositCount, setDepositCount] = useState<number>(0);

    const fetchTotalDeposits = useCallback(async () => {
        try {
            const contract = getModalContract(readOnlyProvider);
            const res = await contract.getTotalDeposit();
            const converted = ethers.formatUnits(res, 18);
            setTotalDeposit(converted);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingDeposit = useCallback(() => {
        setDepositCount((prevValue) => prevValue + 1);
        fetchTotalDeposits();
    }, [fetchTotalDeposits]);


    useEffect(() => {
        fetchTotalDeposits();

        const depositfilter = {
            address: import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
            topics: [
                ethers.id("DepositSuccessful(address,uint256)")
            ],
        };

        wssProvider.getLogs({ ...depositfilter, fromBlock: 7787419 }).then((events) => {
            setDepositCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(depositfilter, trackingDeposit);

        return () => {
            // Perform cleanup
            provider.off(depositfilter, trackingDeposit);

        };

    }, [fetchTotalDeposits, trackingDeposit, depositCount]);

    return totalDeposit;
}

export default useGetTotalDeposit