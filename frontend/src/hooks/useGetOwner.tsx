/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { readOnlyProvider } from "@/constants/provider";
import { getModalContract } from "@/constants/contracts";

const useGetOwner = () => {
    const [ownerAddress, setOwnerAddress] = useState('');

    useEffect(() => {
        const contract = getModalContract(readOnlyProvider);

        contract
            .owner()
            .then((res) => {
                setOwnerAddress(res);
            })
            .catch((err) => {
                console.error(err);
            });

    }, [])

    return ownerAddress;
}

export default useGetOwner