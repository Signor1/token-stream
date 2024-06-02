import { GiStarShuriken } from "react-icons/gi"
import { SiSpringsecurity } from "react-icons/si"


const WhyStream = () => {
    const features: { caption: string, text: string }[] = [
        {
            caption: "Automated Token Streaming",
            text: "TRiver enables users to set up automated token streams for various purposes, including salaries, rewards, subscriptions, and more."
        },
        {
            caption: "User-Centric Design",
            text: "Our platform is designed with the user in mind, offering intuitive interfaces and customizable options to meet the unique needs of each user."
        },
        {
            caption: "Security and Reliability",
            text: "Built on the Optimism blockchain and rigorously tested for security and efficiency, TRiver ensures the safety of your transactions and the reliability of your financial operations."
        }
    ]
    return (
        <main className='w-full flex flex-col items-start my-24'>
            <div className="w-full grid md:grid-cols-2 gap-20 lg:px-28 px-4">
                <div className="w-full order-1 md:order-2 relative flex justify-between items-end">
                    <div className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center">
                        <div className="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] rounded-full bg-gray-950"></div>
                    </div>
                    <div className="lg:w-[150px] self-start md:mt-12 mt-8 lg:h-[150px] w-[100px] h-[100px] rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center">
                        <div className="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] rounded-full bg-gray-950"></div>
                    </div>
                    <div className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center">
                        <div className="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] rounded-full bg-gray-950"></div>
                    </div>
                    <div className="lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] absolute lg:left-20 left-12 bg-gradient-to-br from-sky-600 to-emerald-400 rounded-full  flex justify-center items-center">
                        <div className="lg:w-[280px] lg:h-[280px] w-[190px] h-[190px] rounded-full bg-gray-950 flex justify-center items-center">
                            <SiSpringsecurity className="lg:text-9xl text-7xl text-emerald-400" />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col order-2 md:order-1 items-start gap-1.5">
                    <h1 className="text-3xl text-gray-200 font-belanosima">Why TRiver</h1>
                    <p className="text-gray-400 font-barlow">With TRiver, you can say goodbye to manual transaction processes and hello to a new era of financial automation. Whether you're an individual looking to streamline your personal finances or a business seeking to optimize your operations, TRiver offers the tools and capabilities you need to succeed in the world of DeFi.</p>
                    <h3 className="text-xl text-gray-200 font-belanosima mt-4">Key Features</h3>
                    <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                        {
                            features.map(({ caption, text }, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1.5">
                                        <GiStarShuriken />
                                    </span>
                                    <p className="text-gray-400"><span className="text-gray-300 font-belanosima">{caption}:</span> {text}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default WhyStream