import { Button } from "@/components/ui/button"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { GiStarShuriken } from "react-icons/gi"


const PrivacyPolicy = () => {
    const navigate = useNavigate()

    const features: { caption: string, text: string }[] = [
        {
            caption: "Personal Information",
            text: "We collect your personal information provided to us directly when you use the Application, including but not limited to your name, email address, and payment information. We collect this information to facilitate token streaming transactions and provide you with the services you request."
        },
        {
            caption: "Usage Information",
            text: "We may automatically collect certain information about your use of the Application, including your device type, operating system, IP address, and usage patterns. This information helps us improve the functionality and performance of the Application and understand how users interact with it, and identifying unusual patterns that might suggest fraudulent activities"
        },
    ]

    const features2: { caption: string, text: string }[] = [
        {
            caption: "Transaction Processing",
            text: "We use the personal and transaction information you provide to facilitate token streaming transactions and process payments securely and efficiently."
        },
        {
            caption: "Communication",
            text: "We may use your contact information to communicate with you about your account, transactions, updates to our services, and promotional offers. You can opt out of promotional communications at any time."
        },
        {
            caption: "Analytics and Improvement",
            text: "We analyze usage data to better understand how users interact with the Application and to improve its functionality, performance, and user experience."
        },
        {
            caption: "Legal Compliance",
            text: "We use your provided information to comply with applicable laws, regulations, or legal processes, or to protect our rights or property."
        },
    ]

    const features3: { caption: string, text: string }[] = [
        {
            caption: "Security Measures",
            text: "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
        },
    ]

    const features4: { caption: string, text: string }[] = [
        {
            caption: "Access and Correction",
            text: "You have the right to access, update, or correct your personal information at any time by logging into your account settings."
        },
        {
            caption: "Opt-Out",
            text: "You can opt out of receiving promotional communications from us by following the unsubscribe instructions provided in the communication or by contacting us directly."
        },
    ]

    const features5: { caption: string, text: string }[] = [
        {
            caption: "Policy Modification",
            text: "We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on this page. We encourage you to review this Privacy Policy periodically for any updates."
        },
    ]

    const features6: { caption: string, text: string }[] = [
        {
            caption: "Contact Us",
            text: "If you have any questions, concerns, or complaints about this Privacy Policy or our privacy practices, please contact us at"
        },
    ]

    const features7: { caption: string, text: string }[] = [
        {
            caption: "Children Privacy",
            text: "The Application is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you believe that we may have collected information from a child under 13, please contact us immediately."
        },
    ]
    return (
        <main className="relative min-h-screen flex flex-col">
            <Button onClick={() => navigate('/')} className="bg-sky-500 text-white rounded-md p-3 hover:bg-sky-600 transition duration-300 focus:outline-none absolute top-8 left-8">
                <IoIosArrowRoundBack className="text-2xl" />
            </Button>

            <section className="w-full flex text-gray-300 flex-col pt-28 lg:px-20 md:px-12 px-4">
                <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-5xl tracking-wider  font-belanosima">Privacy Policy</h1>

                <div className="mt-7 mb-20">
                    <div>
                        <p className="font-barlow text-gray-400  text-sm md:text-lg"><span className="bg-gradient-to-r from-sky-400 font-belanosima to-emerald-400 text-transparent bg-clip-text">TRiver</span> is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our token streaming application.</p>

                        <div>
                            <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Informations We Collect</h2>

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

                        <div className="mt-7">
                            <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">How We Use Your Information</h2>

                            <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                                {
                                    features2.map(({ caption, text }, index) => (
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

                        <div className="mt-7">
                            <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Data Security</h2>

                            <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                                {
                                    features3.map(({ caption, text }, index) => (
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

                        <div className="mt-7">
                            <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Your Rights and Choices</h2>

                            <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                                {
                                    features4.map(({ caption, text }, index) => (
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

                        <div className="mt-7">
                            <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Changes to this Privacy Policy</h2>

                            <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                                {
                                    features5.map(({ caption, text }, index) => (
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

                        <div className="mt-7">
                            <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Children's Privacy</h2>

                            <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                                {
                                    features7.map(({ caption, text }, index) => (
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

                        <div className="mt-7">
                            <h2 className="mt-5 font-belanosima text-gray-200 text-lg md:text-2xl lg:text-3xl">Contact</h2>

                            <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                                {
                                    features6.map(({ caption, text }, index) => (
                                        <li key={index} className="flex mt-2 items-start gap-2">
                                            <span className="text-emerald-400 mt-1.5">
                                                <GiStarShuriken />
                                            </span>
                                            <p className="text-gray-400"><span className="text-gray-300 font-belanosima">{caption}:</span> {text} <span className="text-blue-500 cursor-pointer"><a href="mailto:team.triverstream@gmail.com">team.triverstream@gmail.com</a></span></p>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="ml-7 mt-3">
                                {/* <ul className="flex flex-col gap-2 text-gray-400 font-barlow">
                                {
                                    features7.map(({ caption, text }, index) => (
                                        <li key={index} className="flex mt-2 items-start gap-2">
                                            <span className="text-emerald-400 mt-1.5">
                                                <GiStarShuriken />
                                            </span>
                                            <p className="text-gray-400"><span className="text-gray-300 font-belanosima">{caption}:</span> {text}</p>
                                        </li>
                                    ))
                                }
                            </ul>  */}
                                <p className="font-belanosima text-gray-200 text-lg">Last Update: <span className="font-barlow text-gray-400 text-base">01-05-2024</span></p>
                                <p className="font-belanosima flex mt-1 text-lg gap-2">Thank You for using <span onClick={() => navigate('/')} className="bg-gradient-to-r from-sky-400 cursor-pointer to-emerald-400 font-belanosima text-transparent mt-1 text-3xl bg-clip-text">TRiver</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default PrivacyPolicy