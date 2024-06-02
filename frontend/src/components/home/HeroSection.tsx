import { MdOutlineSecurity } from "react-icons/md"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"


const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <main className="w-full overflow-hidden lg:h-[80vh] md:h-[50vh] h-screen flex items-center md:flex-row flex-col">
            <div className="flex-1 h-1/2 md:h-full flex order-2 md:order-1 flex-col gap-5 items-start justify-center lg:px-12 md:px-6 px-4">
                <h1 className="lg:text-7xl text-4xl font-belanosima font-medium text-gray-200">Unlock the Future of Finance with <br /> <span className="bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text">TRiver</span></h1>
                <p className="text-xl font-barlow text-gray-400">Experience seamless token streaming that revolutionizes finance. Automate salaries, rewards, subscriptions, and more with TRiver. Take control of your financial journey today.</p>
                <Button onClick={() => navigate('/signup')} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-600 hover:bg-emerald-500" type="button">Start Streaming Now</Button>
            </div>
            <div className="flex-1  h-1/2 md:h-full order-1 md:order-2 relative flex items-end justify-end flex-col before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-l before:from-gray-950/30 before:to-transparent after:absolute after:bottom-0 after:right-0 after:w-full after:h-full after:bg-gradient-to-b after:from-gray-950 after:to-transparent">
                <div className="lg:w-[600px] animate-spin lg:h-[600px] w-[500px] h-[500px] rounded-full bg-gradient-to-t from-sky-400 to-emerald-400 flex justify-center items-center -mr-28 md:-mt-28 -mt-40">
                    <div className="lg:w-[450px] lg:h-[450px] w-[400px] h-[400px] rounded-full bg-gray-950 flex justify-center items-center" id="heroPattern">
                        <div className="lg:w-[300px] lg:h-[300px] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 flex justify-center items-center">
                            <div className="w-[200px] h-[200px] rounded-full bg-gray-950 " id="heroPattern"></div>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-32 -right-24 lg:w-[400px] lg:h-[400px] md:w-[350px] md:h-[350px] w-[300px] h-[300px] rounded-full bg-gray-950/10 z-10 lg:border-[60px] border-[40px] md:border-[50px] border-emerald-400">
                </div>

                <div className="absolute top-12 md:right-16 right-6 z-20 flex items-center gap-2 animate-pulse">
                    <span className="text-gray-200 text-sm font-belanosima">Trustworthy</span>
                    <span className="w-8 h-8 rounded-full bg-gray-800 flex justify-center items-center text-emerald-400 text-xl">
                        <MdOutlineSecurity />
                    </span>
                </div>


                <div className="absolute md:bottom-28 bottom-16 md:right-28 right-12 z-20 flex items-center gap-2 animate-pulse" >
                    <span className="text-gray-200 text-sm font-belanosima">Optimized</span>
                    <span className="w-8 h-8 rounded-full bg-gray-800 flex justify-center items-center text-emerald-400 text-xl">
                        <MdOutlineSecurity />
                    </span>
                </div>


                <div className="absolute md:bottom-24 bottom-6 md:left-12 left-6 z-20 flex items-center gap-2 animate-pulse">
                    <span className="text-gray-200 text-sm font-belanosima">Tested</span>
                    <span className="w-8 h-8 rounded-full bg-gray-800 flex justify-center items-center text-emerald-400 text-xl">
                        <MdOutlineSecurity />
                    </span>
                </div>


                <div className="absolute animate-pulse top-20 left-16 z-20 flex items-center gap-2" >
                    <span className="text-gray-200 text-sm font-belanosima">Secure & Safe</span>
                    <span className="w-8 h-8 rounded-full bg-gray-800 flex justify-center items-center text-emerald-400 text-xl">
                        <MdOutlineSecurity />
                    </span>
                </div>


                <div className="absolute top-1/2 md:right-1/2 right-[40%] z-20 flex items-center gap-2 animate-bounce" >
                    <span className="text-gray-200 text-sm font-belanosima">Automatic</span>
                    <span className="w-8 h-8 rounded-full bg-gray-800 flex justify-center items-center text-emerald-400 text-xl">
                        <MdOutlineSecurity />
                    </span>
                </div>
            </div>
        </main>
    )
}

export default HeroSection