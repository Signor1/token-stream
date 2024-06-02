/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import dstv from "../../assets/DStv.jpeg";
import netflix from "../../assets/netflix.webp"
import startlink from "../../assets/starlink.webp"
import spotify from "../../assets/spotify.avif"
import useGetSubscriptionPlans from "@/hooks/useGetSubscriptionPlans";
import useStartSubscription from "@/hooks/useStartSubscription";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { TbLoaderQuarter } from "react-icons/tb";
import { PiSignInFill } from "react-icons/pi";

const CreateSubscription = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSending, setIsSending] = useState(false)
    const [buttonState, setButtonState] = useState('submit');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const plans = useGetSubscriptionPlans();

    const handleSubmit = useStartSubscription();

    const handleStartSubscription = async (id: number) => {
        setIsSending(true);
        setButtonState('verifying');

        setTimeout(async () => {
            setButtonState('submitting');
            await handleSubmit(id, email, password);
            resetPlanForm();
            setIsSending(false);
            setButtonState('submit');
        }, 2000);
    }

    const resetPlanForm = () => {
        setEmail("");
        setPassword("");
    }

    const ImageArray = useMemo(() => [netflix, dstv, startlink, spotify], []);
    const planLinks = useMemo(() => [
        "https://www.netflix.com/ng/",
        "https://www.dstv.com/en-ng"
    ], []);


    return (
        <main className="w-full h-full flex flex-col gap-4 mt-8 ml-2 pr-4">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Subscription Setup</h1>
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

                                <p className="text-gray-300 px-3 text-xs tracking-wide font-barlow">If you don't have an account in <span className="text-emerald-500">{plan.name}</span>, click on <span className="text-emerald-500">{plan.name}</span> to create account. </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <a href={planLinks[plan.id]} target="_blank" rel="noopener noreferrer" className="text-gray-100 text-base font-barlow px-4 py-2 hover:bg-sky-500 bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-md">{plan.name}</a>
                                    <Dialog >
                                        <DialogTrigger asChild>
                                            <Button disabled={!plan.isActive} className="text-gray-100 text-base font-barlow px-4 py-2 bg-sky-500 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed">Start Subscription</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px] font-barlow bg-gray-800 border-gray-600">
                                            <DialogHeader>
                                                <DialogTitle className="text-gray-300 font-barlow text-lg">{plan.name} Subscription</DialogTitle>
                                                <DialogDescription className="text-gray-500">
                                                    Input your {plan.name} details
                                                </DialogDescription>
                                            </DialogHeader>
                                            <main className="w-full grid gap-8">
                                                <div className="relative w-full font-barlow">
                                                    <label className="text-gray-300 ml-1 mb-1">Email</label>
                                                    <input
                                                        type="text"
                                                        name={"email"}
                                                        id={"email"}
                                                        value={email}
                                                        onChange={handleInputChange}
                                                        className="block w-full rounded-md border text-sm px-3 py-1.5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                                                    />

                                                </div>

                                                <div className="relative w-full font-barlow">
                                                    <label className="text-gray-300 ml-1 mb-1">Password</label>
                                                    <input
                                                        type="password"
                                                        name={"password"}
                                                        id={"password"}
                                                        value={password}
                                                        onChange={handleInputChange}
                                                        className="block w-full rounded-md border text-sm px-3 py-1.5 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                                                    />
                                                </div>
                                            </main>
                                            <DialogFooter>
                                                <Button type="button" onClick={() => handleStartSubscription(plan.id)} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-between items-center gap-1 bg-sky-500 hover:bg-emerald-500 disabled:cursor-not-allowed capitalize">
                                                    {
                                                        isSending ? <span className="flex items-center">
                                                            <TbLoaderQuarter className="animate-spin text-2xl mr-1" />
                                                            {buttonState}...</span> :
                                                            <span className="flex items-center">{buttonState}
                                                                <PiSignInFill className="text-xl ml-1" />
                                                            </span>
                                                    }
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>

                            </section>
                        ))
                    }

                </main>
            </section>
        </main>
    )
}

export default CreateSubscription
