import { Button } from "@/components/ui/button"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"


const Disclaimer = () => {
    const navigate = useNavigate()
    return (
        <main className="relative min-h-screen flex flex-col">
            <Button onClick={() => navigate('/')} className="bg-sky-500 text-white rounded-md p-3 hover:bg-sky-600 transition duration-300 focus:outline-none absolute top-8 left-8">
                <IoIosArrowRoundBack className="text-2xl" />
            </Button>

            <section className="w-full flex text-gray-300 flex-col pt-28 lg:px-20 md:px-12 px-4">
                <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-5xl tracking-wider  font-belanosima">Disclaimer</h1>

                <div className="mt-4 md:mt-7 mb-20">
                    <div>
                        <h2 className="font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Introduction</h2>

                        <p className="font-barlow text-gray-400  md:mt-2 text-sm md:text-base">Welcome to the disclaimer page of TRiver Token Streaming Platform. This page outlines important legal disclaimers and limitations of liability that apply to your use of our platform. By using the platform, you acknowledge and agree to the terms of this disclaimer.</p>
                        <p className="font-barlow text-gray-400 mt-2  md:mt-3 text-sm md:text-base">The information contained in this website is for general information purposes only. The information is provided by [business name] and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>

                        <h2 className="font-belanosima text-gray-200 text-lg mt-3 md:mt-5 md:text-2xl lg:text-3xl">No Investment Advice</h2>
                        <p className="font-barlow text-gray-400 md:mt-1 text-sm md:text-base">TRiver Token Streaming Platform does not provide investment, financial, or legal advice. The content provided on this platform, including but not limited to articles, guides, and tutorials, is for informational purposes only. Users are solely responsible for their own investment decisions and should seek professional advice where necessary.</p>

                        <h2 className="font-belanosima text-gray-200 text-lg mt-3 md:mt-5 md:text-2xl lg:text-3xl">No Guarantee of Results</h2>
                        <p className="font-barlow text-gray-400 md:mt-1 text-sm md:text-base">While we strive to provide accurate and up-to-date information, TRiver Token Streaming Platform makes no guarantees or representations regarding the accuracy, reliability, or completeness of the content available on the platform. We do not guarantee any specific results or outcomes from using the platform.</p>

                        <h2 className="font-belanosima text-gray-200 text-lg mt-3 md:mt-5 md:text-2xl lg:text-3xl">Limitation of Liability</h2>
                        <p className="font-barlow text-gray-400 md:mt-1 text-sm md:text-base">In no event shall TRiver Token Streaming Platform, its affiliates, partners, or contributors be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the platform, whether based on contract, tort, strict liability, or any other legal theory, even if we have been advised of the possibility of such damages.</p>

                        <h2 className="font-belanosima text-gray-200 text-lg mt-3 md:mt-5 md:text-2xl lg:text-3xl">Indemnification</h2>
                        <p className="font-barlow text-gray-400 md:mt-1 text-sm md:text-base">You agree to indemnify and hold harmless TRiver Token Streaming Platform, its affiliates, partners, and contributors from any claims, damages, liabilities, costs, or expenses arising out of your use of the platform or violation of these terms.</p>
                        <p className="font-barlow text-gray-400 md:mt-2 mt-1 text-sm md:text-base">Every effort is made to keep the website up and running smoothly. However, TRiver takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>

                        <h2 className="font-belanosima text-gray-200 text-lg mt-3 md:mt-5 md:text-2xl lg:text-3xl">Changes to Disclaimer</h2>
                        <p className="font-barlow text-gray-400 md:mt-1 text-sm md:text-base">We reserves the right to update or modify this disclaimer at any time, without prior notice. Any changes will be effective immediately upon posting on this page.</p>

                        <p className="text-gray-400 font-barlow">
                            If you have any questions or concerns about these disclaimer, please contact us at: <span className="text-blue-500 cursor-pointer"><a href="mailto:team.triverstream@gmail.com">team.triverstream@gmail.com</a></span>
                        </p>
                        <p className="font-belanosima mt-5 text-gray-200 text-lg">Last Update: <span className="font-barlow text-gray-400 text-base">01-05-2024</span></p>

                        <p className="font-belanosima mt-1 flex text-lg gap-2">Thank You for using <span onClick={() => navigate('/')} className="bg-gradient-to-r from-sky-400 cursor-pointer to-emerald-400 font-belanosima text-transparent mt-1 text-3xl bg-clip-text">TRiver</span></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Disclaimer