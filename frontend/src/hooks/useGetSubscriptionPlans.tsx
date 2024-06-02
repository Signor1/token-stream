/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider, wssProvider } from "@/constants/provider";
import { ethers } from "ethers";
import { getSubscriptionContract } from "@/constants/contracts";
import { useLocation } from "react-router-dom";

const useGetSubscriptionPlans = () => {
    const [plans, setPlans] = useState([]);
    const [planCount, setPlanCount] = useState<number>(0);
    const [updateCount, setUpdateCount] = useState<number>(0);
    const [activateCount, setActivateCount] = useState<number>(0);
    const [deactivateCount, setDeactivateCount] = useState<number>(0);

    const { pathname } = useLocation();

    const fetchPlans = useCallback(async () => {
        try {
            const contract = getSubscriptionContract(readOnlyProvider);
            const res = await contract.getAllSubscriptionPlans();
            const converted = res.map((item: any, index: number) => ({
                id: index,
                name: item[0],
                fee: ethers.formatUnits(item[1], 18),
                isActive: item[2],
            }))
            setPlans(converted);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingPlans = useCallback(() => {
        setPlanCount((prevValue) => prevValue + 1);
        fetchPlans();
    }, [fetchPlans]);

    const trackingPlanUpdate = useCallback(() => {
        setUpdateCount((prevValue) => prevValue + 1);
        fetchPlans();
    }, [fetchPlans]);

    const trackingPlanActivate = useCallback(() => {
        setActivateCount((prevValue) => prevValue + 1);
        fetchPlans();
    }, [fetchPlans]);

    const trackingPlanDeactivate = useCallback(() => {
        setDeactivateCount((prevValue) => prevValue + 1);
        fetchPlans();
    }, [fetchPlans]);

    if (pathname === "/user/createsubscription" || pathname === "/admin/updatesubscriptionplan") {
        setTimeout(() => {
            fetchPlans();
        }, 8000)
    }



    useEffect(() => {
        fetchPlans();

        const plansfilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [
                ethers.id("SubscriptionPlanCreated(address,uint256,string)")
            ],
        };

        wssProvider.getLogs({ ...plansfilter, fromBlock: 7787519 }).then((events) => {
            setPlanCount(events.length + 1);
        });

        const updatefilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [
                ethers.id("SubscriptionPlanUpdated(address,uint256,string)")
            ],
        };

        wssProvider.getLogs({ ...updatefilter, fromBlock: 7787519 }).then((events) => {
            setUpdateCount(events.length + 1);
        });

        const activatefilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [
                ethers.id("SubscriptionPlanActivated(uint256)")
            ],
        };

        wssProvider.getLogs({ ...activatefilter, fromBlock: 7787519 }).then((events) => {
            setActivateCount(events.length + 1);
        });

        const deactivatefilter = {
            address: import.meta.env.VITE_SUBSCRIPTION_ADDRESS,
            topics: [
                ethers.id("SubscriptionPlanDeactivated(uint256)")
            ],
        };

        wssProvider.getLogs({ ...deactivatefilter, fromBlock: 7787519 }).then((events) => {
            setDeactivateCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WEB_SOCKET_RPC_URL
        );

        provider.on(plansfilter, trackingPlans);

        provider.on(updatefilter, trackingPlanUpdate);

        provider.on(activatefilter, trackingPlanActivate);

        provider.on(deactivatefilter, trackingPlanDeactivate);

        return () => {
            // Perform cleanup
            provider.off(plansfilter, trackingPlans);

            provider.off(updatefilter, trackingPlanUpdate);

            provider.off(activatefilter, trackingPlanActivate);

            provider.off(deactivatefilter, trackingPlanDeactivate);

        };

    }, [fetchPlans, trackingPlans, planCount, trackingPlanUpdate, updateCount, trackingPlanActivate, activateCount, trackingPlanDeactivate, deactivateCount]);

    return plans;
}

export default useGetSubscriptionPlans