import { CiEdit } from "react-icons/ci"
import { LuSettings2 } from "react-icons/lu"
import { RxUpdate } from "react-icons/rx"
import { SlPower, SlSettings, SlUserFollowing } from "react-icons/sl"


const HowItWorks = () => {
    const steps: { caption: string, text: string, icon: JSX.Element }[] = [
        {
            caption: "Authenticate Your Account",
            text: "Before you can start streaming tokens, securely authenticate your account using industry-standard authentication methods. Ensure the safety of your financial data with TRiver's robust security measures.",
            icon: <SlUserFollowing />,
        }, {
            caption: "Set Up Your Stream",
            text: "Begin by defining the parameters of your token stream, including the amount of tokens to be streamed, the duration of the stream, and any specific conditions or triggers you want to apply.",
            icon: <SlSettings />,
        }, {
            caption: "Customize Your Stream",
            text: "Tailor your token stream to suit your specific needs and preferences. Choose from a variety of customization options, such as periodic payments, performance-based rewards, or subscription tiers.",
            icon: <CiEdit />,
        }, {
            caption: "Activate Your Stream",
            text: "Once you've configured your stream to your satisfaction, activate it to start the token flow. Sit back and watch as TRiver handles the rest, ensuring that your tokens are distributed smoothly and efficiently according to your predefined criteria.",
            icon: <SlPower />,
        }, {
            caption: "Manage Your Stream",
            text: "Monitor and manage your token stream with ease using TRiver's intuitive interface. Pause, modify, or stop your stream as needed, and track your transaction history to stay informed about your financial activities.",
            icon: <LuSettings2 />,
        }, {
            caption: "Enjoy Seamless Automation",
            text: "With TRiver, you can enjoy the benefits of seamless financial automation without the hassle of manual intervention. Whether you're distributing salaries, rewarding users, or managing subscriptions, TRiver streamlines the process for maximum efficiency and convenience.",
            icon: <RxUpdate />,
        }
    ]
    return (
        <main className='w-full flex flex-col items-center md:my-24 my-20 lg:px-20 md:px-16 px-4'>
            <h1 className="text-4xl text-gray-200 font-belanosima">How It Works</h1>
            <p className="text-gray-400 font-barlow text-center md:w-[50%]">TRiver makes token streaming easy and efficient, allowing you to automate financial processes with just a few simple steps:</p>
            <div className="w-full  grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-12">
                {
                    steps.map(({ caption, text, icon }, index) => (
                        <div className={`flex flex-col bg-gray-900 px-6 py-8 items-center gap-4 overflow-hidden relative cursor-pointer`} key={index}>
                            <div className="  absolute -top-10 -left-7 w-[70px] h-[100px] bg-gray-300 rotate-45 flex justify-end items-center pr-4">
                                <h1 className="-rotate-45 text-2xl text-gray-900 font-barlow">{index + 1}</h1>
                            </div>
                            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center text-3xl ">
                                {icon}
                            </div>
                            <h3 className="text-xl text-gray-200 font-belanosima">{caption}</h3>
                            <p className="text-gray-400 font-barlow">{text}</p>

                        </div>
                    ))
                }
            </div>
        </main >
    )
}

export default HowItWorks