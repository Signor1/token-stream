/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getModalContract } from "@/constants/contracts";

const useGetRevenue = () => {
    const [contractRevenue, setContractRevenue] = useState<number | string>(0);
    const [depositCount, setDepositCount] = useState<number>(0);

    const fetchContractRevenue = useCallback(async () => {
        try {
            const contract = getModalContract(readOnlyProvider);
            const res = await contract.contractBalance();
            const converted = ethers.formatUnits(res, 18);
            setContractRevenue(converted);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingDeposit = useCallback(() => {
        setDepositCount((prevValue) => prevValue + 1);
        fetchContractRevenue();
    }, [fetchContractRevenue]);


    useEffect(() => {
        fetchContractRevenue();

        const depositfilter = {
            address: import.meta.env.VITE_MODA_CONTRACT_ADDRESS,
            topics: [
                ethers.id("AdditionSuccessful(address,uint256)")
            ],
        };

        wssProvider.getLogs({ ...depositfilter, fromBlock: 5850109 }).then((events) => {
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

    }, [fetchContractRevenue, trackingDeposit, depositCount]);

    return contractRevenue;
}

export default useGetRevenue