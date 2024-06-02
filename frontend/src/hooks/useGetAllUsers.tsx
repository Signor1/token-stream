/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { getENSContract } from "@/constants/contracts";
import { ethers } from "ethers";

const useGetAllUsers = () => {
    const [allUser, setAllUser] = useState([]);
    const [count, setCount] = useState<number>(0);


    const fetchAllUsers = useCallback(async () => {
        try {
            const contract = getENSContract(readOnlyProvider);
            const res = await contract.getAllUsers();
            const converted = res.map((item: [string, string]) => ({
                name: ethers.decodeBytes32String(item[0]),
                address: item[1],
            }));
            setAllUser(converted);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingUsers = useCallback(() => {
        setCount((prevValue) => prevValue + 1);
        fetchAllUsers();
    }, [fetchAllUsers]);


    useEffect(() => {
        fetchAllUsers();

        const filter = {
            address: import.meta.env.VITE_ENS_CONTRACT_ADDRESS,
            topics: [ethers.id("MemberEnrolled(address,bytes)")],
        };

        wssProvider.getLogs({ ...filter, fromBlock: 5812592 }).then((events) => {
            setCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(filter, trackingUsers);

        return () => {
            // Perform cleanup
            provider.off(filter, trackingUsers);
        };

    }, [fetchAllUsers, trackingUsers, count]);

    return allUser;
}

export default useGetAllUsers