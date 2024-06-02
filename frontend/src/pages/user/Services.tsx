import SubscriptionImg from "../../assets/subscribe.png";
import SalaryImg from "../../assets/salary.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { GiStarShuriken } from "react-icons/gi"

const Services = () => {
    const navigate = useNavigate()

    return (
        <main className="w-full h-full flex flex-col gap-4 mt-8 ml-2">
            <div className="w-full flex flex-col gap-2">
                <h1 className="md:text-4xl text-2xl text-gray-300 font-belanosima">Choose Your Service</h1>
                <p className="text-gray-400 font-barlow md:text-lg lg:w-[70%] md:w-[80%] w-full">As a registered user, you now have access to our range of services designed to streamline your financial transactions. Please select the service you're interested in:</p>
            </div>
            <section className="w-full grid md:grid-cols-2 justify-center gap-8 mt-6 pr-4 lg:px-24">
                {
                    services.map(({ caption, list, url, img }, index) => (
                        <div key={index} className="w-full flex flex-col items-start bg-gray-800 ring-1 ring-gray-600 py-7 px-5 rounded-md cursor-pointer transition-all duration-200 hover:ring-emerald-500">
                            <div className="w-full flex flex-col items-start">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ' }}>
                                    <img src={img} alt={caption} className="w-full h-full object-contain" />
                                </div>
                                <h1 className="text-xl text-gray-200 text-start font-belanosima mt-5">{caption}</h1>
                                <ul className="flex flex-col gap-2 text-gray-400 font-barlow mt-2">
                                    {
                                        list.map((item, index) => (

                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-emerald-400 mt-1 text-sm">
                                                    <GiStarShuriken />
                                                </span>
                                                <p className="text-gray-400 text-sm">{item}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <Button onClick={() => navigate(url)} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-500 hover:bg-emerald-500 mt-5 ml-2" type="button">Get Started</Button>
                        </div>
                    ))
                }

            </section>
        </main>
    )
}

export default Services


type ServiceTypes = {
    caption: string
    list: string[]
    url: string
    img: string
}

const services: ServiceTypes[] = [
    {
        caption: 'Subscription Management',
        list: ["Easily manage recurring payments and subscriptions.", "Set up automated payments for your favorite services.", "Get reminders for upcoming subscription renewals."],
        url: '/user/createsubscription',
        img: SubscriptionImg
    },
    {
        caption: 'Salary Distributions',
        list: ["Streamline your salary distribution process.", "Ensure timely and accurate payments to your employees.", "Customize salary distribution based on your organization's needs."],
        url: '/user/createsalarystream',
        img: SalaryImg
    }
]