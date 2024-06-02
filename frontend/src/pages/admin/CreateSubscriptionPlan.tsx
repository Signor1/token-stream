import { Button } from "@/components/ui/button";
import useCreateSubscriptionPlan from "@/hooks/useCreateSubscriptionPlan";
import { useState } from "react";
import { PiSignInFill } from "react-icons/pi";
import { TbLoaderQuarter } from "react-icons/tb";


const CreateSubscriptionPlan = () => {
    return (
        <main className="w-full h-full flex flex-col gap-4 mt-8 ml-2 pr-4">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Subscription Plan Setup</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">Effortlessly manage your employee salaries with precision and ease using StreamFlow's Salary Distribution Setup</p>
            </div>

            <section className="w-full flex flex-col gap-3 border  border-gray-600 bg-gray-800 py-6 px-10 rounded-md mt-8">
                <HandleForm />
            </section>
        </main>
    )
}

export default CreateSubscriptionPlan



const HandleForm = () => {
    const [planName, setPlanName] = useState("")
    const [planFee, setPlanFee] = useState(0)

    const [isSending, setIsSending] = useState(false);

    const uploadData = useCreateSubscriptionPlan(planName, planFee);

    const handleFormSubmit = async (event: React.FormEvent) => {
        setIsSending(true);
        event.preventDefault();
        await uploadData();
        setIsSending(false);
        setPlanName("")
        setPlanFee(0)
    };

    return (

        <form className="w-full grid gap-8" onSubmit={handleFormSubmit}>
            <div className="relative w-full font-barlow">
                <label className="text-gray-300 ml-1 mb-1">Plan Name</label>
                <input
                    type="text"
                    name={"planName"}
                    id={"planName"}
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                />

            </div>

            <div className="relative w-full font-barlow">
                <label className="text-gray-300 ml-1 mb-1">Plan Fee</label>
                <input
                    type="number"
                    name={"planFee"}
                    id={"planFee"}
                    value={planFee}
                    onChange={(e) => setPlanFee(Number(e.target.value))}
                    className="block w-full rounded-md border text-sm px-3 py-2 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-700 focus-visible:ring-sky-400 font-barlow text-gray-200 h-12"
                />

            </div>


            <div className="w-full">
                <Button
                    type="submit"
                    className={`text-gray-100 text-sm mt-4 font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-500 hover:bg-emerald-500 ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={isSending}
                >
                    {
                        isSending ? <span className="flex items-center">
                            <TbLoaderQuarter className="animate-spin text-2xl mr-1" />
                            Submitting...</span> :
                            <span className="flex items-center">Submit
                                <PiSignInFill className="text-xl ml-1" />
                            </span>
                    }

                </Button>
            </div>
        </form>
    )
}