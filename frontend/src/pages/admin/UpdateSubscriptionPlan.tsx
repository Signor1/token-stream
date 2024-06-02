/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import dstv from "../../assets/DStv.jpeg";
import netflix from "../../assets/netflix.webp"
import startlink from "../../assets/starlink.webp"
import spotify from "../../assets/spotify.avif"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../../components/ui/dialog";
import { useMemo, useState } from "react";
import useGetSubscriptionPlans from "@/hooks/useGetSubscriptionPlans";
import useUpdateSubscriptionPlan from "@/hooks/useUpdateSubscriptionPlan";
import useActivateSubscriptionPlan from "@/hooks/useActivateSubscriptionPlan";
import useDeactivateSubscriptionPlan from "@/hooks/useDeactivateSubscriptionPlan";

const UpdateSubscriptionPlan = () => {
    const [planName, setPlanName] = useState("");
    const [planFee, setPlanFee] = useState(0);

    const plans = useGetSubscriptionPlans();

    const handleSubmit = useUpdateSubscriptionPlan();

    const handleActivate = useActivateSubscriptionPlan();

    const handleDeactivate = useDeactivateSubscriptionPlan();

    const handleEditPlan = async (id: number) => {
        await handleSubmit(id, planName, planFee);
        resetPlanForm();
    }

    const resetPlanForm = () => {
        setPlanName("");
        setPlanFee(0);
    }

    const handleActivatePlan = async (id: number) => {
        await handleActivate(id);
    }

    const handleDeactivatePlan = async (id: number) => {
        await handleDeactivate(id);
    }


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "planName") {
            setPlanName(value);
        } else if (name === "planFee") {
            setPlanFee(Number(value));
        }
    }

    const ImageArray = useMemo(() => [netflix, dstv, startlink, spotify], []);

    return (
        <main className="w-full h-full flex flex-col gap-4 mt-8 ml-2 pr-4">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Update Subscription Plan</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>
            <section className="w-full flex flex-col my-4 gap-3">
                <h3 className="md:text-xl text-lg text-gray-300 font-belanosima">Available Subscription Services</h3>
                <main className="w-full grid grid-cols-2 gap-8">
                    {
                        plans?.map((plan: any) => (
                            <section className="w-full flex flex-col gap-3 bg-gray-800 p-4 rounded-md" key={plan.id}>
                                <div className="w-full h-[200px] rounded-md overflow-hidden">
                                    <img src={ImageArray[plan.id]} alt="netflix" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full flex justify-between px-3 items-center">
                                    <h3 className="text-gray-300 font-barlow">Plan Name: <span className="font-belanosima">{plan.name}</span></h3>
                                    <h3 className="text-gray-300 font-barlow">Plan Amount: <span className="font-belanosima">{plan.fee} OP</span></h3>
                                </div>
                                <div className="w-full flex justify-between px-3 items-center">
                                    <h3 className="text-gray-300 font-barlow">Plan Duration: <span className="font-belanosima">Monthly</span></h3>
                                    <h3 className="text-gray-300 font-barlow">Plan Status: <span className="font-belanosima">{plan.isActive ? "Active" : "Deactivated"}</span></h3>
                                </div>

                                <div className="w-full grid grid-cols-2 gap-4">
                                    <Dialog >
                                        <DialogTrigger asChild>
                                            <Button className="text-gray-100 text-base font-barlow px-4 py-2 bg-sky-500 hover:bg-emerald-500">Edit Plan</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px] font-barlow bg-gray-800 border-gray-600">
                                            <DialogHeader>
                                                <DialogTitle className="text-gray-300 font-barlow text-lg">Update {plan.name} Plan</DialogTitle>
                                                <DialogDescription className="text-gray-500">
                                                    Update the subscription plan details.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <main className="w-full grid gap-8">
                                                <div className="relative w-full font-barlow">
                                                    <label className="text-gray-300 ml-1 mb-1">Plan Name</label>
                                                    <input
                                                        type="text"
                                                        name={"planName"}
                                                        id={"planName"}
                                                        value={planName}
                                                        onChange={handleInputChange}
                                                        className="block w-full rounded-md border text-sm px-3 py-1.5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                                                    />

                                                </div>

                                                <div className="relative w-full font-barlow">
                                                    <label className="text-gray-300 ml-1 mb-1">Plan Fee</label>
                                                    <input
                                                        type="number"
                                                        name={"planFee"}
                                                        id={"planFee"}
                                                        value={planFee}
                                                        onChange={handleInputChange}
                                                        className="block w-full rounded-md border text-sm px-3 py-1.5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                                                    />
                                                </div>
                                            </main>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button type="button" onClick={() => handleEditPlan(plan.id)} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-emerald-500 disabled:cursor-not-allowed">Update</Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>

                                    {
                                        plan.isActive ?
                                            <Button className="text-gray-100 text-base font-barlow px-4 py-2 bg-red-500 hover:bg-emerald-500" onClick={() => handleDeactivatePlan(plan.id)}>
                                                Deactivate
                                            </Button> :
                                            <Button className="text-gray-100 text-base font-barlow px-4 py-2 bg-emerald-500 hover:bg-emerald-500" onClick={() => handleActivatePlan(plan.id)}>
                                                Activate
                                            </Button>
                                    }
                                </div>

                            </section>
                        ))
                    }



                </main>
            </section>

        </main>
    )
}

export default UpdateSubscriptionPlan