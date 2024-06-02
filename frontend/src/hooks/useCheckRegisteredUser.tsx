/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { readOnlyProvider } from "@/constants/provider";
import { getENSContract } from "@/constants/contracts";
import { ethers } from "ethers";

export const useCheckRegisteredUser = (address: any) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const contract = getENSContract(readOnlyProvider);

        contract
            .getUserInfo(address)
            .then((res) => {
                const converted = {
                    name: ethers.decodeBytes32String(res[0]),
                    address: res[1],
                };

                setUser(converted);
            })
            .catch((err) => {
                console.error(err);
            });

    }, [address])

    return user;
}