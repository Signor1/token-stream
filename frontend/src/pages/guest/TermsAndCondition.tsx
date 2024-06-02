import { Button } from "@/components/ui/button"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { GiStarShuriken } from "react-icons/gi"


const TermsAndCondition = () => {
    const navigate = useNavigate()

    const features: { caption: string, text: string }[] = [
        {
            caption: "Termination",
            text: "TRiver Token Streaming Platform reserves the right to suspend or terminate user accounts or access to the platform at any time, without prior notice or liability, for any reason."
        },
        {
            caption: "Governing Law",
            text: "These terms and conditions shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions."
        },
        {
            caption: "Changes to Terms",
            text: "reserves the right to modify or revise these terms and conditions at any time, without prior notice. By continuing to use the platform after any such changes, users agree to be bound by the modified terms."
        },
    ]
    return (
        <main className="relative min-h-screen flex flex-col">
            <Button onClick={() => navigate('/')} className="bg-sky-500 text-white rounded-md p-3 hover:bg-sky-600 transition duration-300 focus:outline-none absolute top-8 left-8">
                <IoIosArrowRoundBack className="text-2xl" />
            </Button>

            <section className="w-full flex text-gray-300 flex-col pt-28 lg:px-20 md:px-12 px-4">
                <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-5xl tracking-wider  font-belanosima">Terms & Conditions</h1>

                <div className="mt-5 mb-16">
                    <p className="font-barlow text-gray-400 pt-3">
                        Welcome to TRiver Token Streaming Platform! By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using the platform. If you do not agree with any part of these terms, you may not access or use the platform.
                    </p>

                    <div className="">
                        <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl"> What are our obligations</h2>
                        <p className="font-barlow text-gray-400">Subject to the Customer remaining compliant with the terms of this agreement we will grant the Customer a licence for the term in order to:</p>

                        <div>

                            <div className="md:flex mt-5 md:gap-3">

                                <div className="">
                                    <h2 className="font-belanosima text-lg">TRiver's Obligation</h2>
                                    <ul className="list-disc ml-4 mt-2">
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Service Availability: <span className="font-barlow text-sm text-gray-400">TRiver Token Streaming Platform makes reasonable efforts to ensure that the platform is available and accessible to users at all times. However, we do not guarantee uninterrupted access or operation of the platform.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Security: <span className="font-barlow text-sm text-gray-400">We implement reasonable security measures to protect user data and ensure the integrity of the platform. However, users are responsible for maintaining the security of their accounts and passwords.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Fair Use Policy: <span className="font-barlow text-sm text-gray-400">Our Platform reserves the right to enforce a fair use policy to prevent abuse or misuse of the platform. This may include limiting excessive token streaming or imposing usage restrictions on users.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Privacy Protection: <span className="font-barlow text-sm text-gray-400">TRiver collect, use, and disclose user data in accordance with our Privacy Policy. We are committed to protecting the privacy and security of user information.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Compliance with Laws: <span className="font-barlow text-sm text-gray-400">We comply with all applicable laws and regulations governing the operation of the platform, including but not limited to data protection laws and regulations.</span></li>
                                    </ul>
                                </div>

                                <div className="mt-10 md:mt-0 ">
                                    <h2 className="font-belanosima text-lg">Obligation of User</h2>
                                    <ul className="list-disc ml-4 mt-2">
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Compliance with Terms: <span className="font-barlow text-sm text-gray-400">Users agree to comply with these terms and conditions and any additional policies or guidelines provided by TRiver Token Streaming Platform.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Accuracy of Information: <span className="font-barlow text-sm text-gray-400"> Users are responsible for providing accurate and up-to-date information when using the platform, including account registration and payment details.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Prohibited Activities: <span className="font-barlow text-sm text-gray-400">Our Platform reserves the right to enforce a fair use policy to prevent abuse or misuse of the platform. This may include limiting excessive token streaming or imposing usage restrictions on users.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Respect for Intellectual Property: <span className="font-barlow text-sm text-gray-400">Users agree to respect the intellectual property rights of TRiver Token Streaming Platform and other users, including copyrights, trademarks, and patents.</span></li>
                                        <li className="font-belanosima mb-2 text-base text-gray-200">Payment Obligations: <span className="font-barlow text-sm text-gray-400">Users agree to pay any applicable fees or charges associated with their use of the platform, as outlined in our pricing and payment terms.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Applicable Law</h2>

                        <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                            {
                                features.map(({ caption, text }, index) => (
                                    <li key={index} className="flex mt-2 items-start gap-2">
                                        <span className="text-emerald-400 mt-1.5">
                                            <GiStarShuriken />
                                        </span>
                                        <p className="text-gray-400"><span className="text-gray-300 font-belanosima">{caption}:</span> {text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-belanosima text-gray-200 text-lg mt-5 md:text-2xl lg:text-3xl">Conclusion</h2>

                        <p className="text-gray-400 font-barlow mt-1">
                            Thank you for reviewing our terms and conditions. By using the TRiver Token Streaming Platform, you agree to be bound by the terms outlined in this document.
                        </p>

                        <p className="text-gray-400 font-barlow">
                            If you have any questions or concerns about these terms and conditions, please contact us at: <span className="text-blue-500 cursor-pointer"><a href="mailto:team.triverstream@gmail.com">team.triverstream@gmail.com</a></span>
                        </p>
                        <p className="font-belanosima mt-5 text-gray-200 text-lg">Last Update: <span className="font-barlow text-gray-400 text-base">01-05-2024</span></p>

                        <p className="font-belanosima mt-1 flex text-lg gap-2">Thank You for using <span onClick={() => navigate('/')} className="bg-gradient-to-r from-sky-400 cursor-pointer to-emerald-400 font-belanosima text-transparent mt-1 text-3xl bg-clip-text">TRiver</span></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TermsAndCondition