import SubscriptionImg from "../../assets/subscribe.png";
import SalaryImg from "../../assets/salary.png";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { BackgroundGradient } from "../ui/background-gradient";

type ServiceTypes = {
    caption: string
    description: string
    url: string
    img: string
}

const Services = () => {

    return (
        <main className='w-full flex flex-col items-center md:my-24 my-20 lg:px-20 md:px-16 px-4'>
            <h1 className="text-4xl text-gray-200 font-belanosima">Our Services</h1>
            <p className="text-gray-400 font-barlow text-center md:w-[50%]">Explore our range of services tailored to meet your financial needs:</p>

            <div className="w-full grid md:grid-cols-2 lg:px-40 md:px-8 px-3 gap-7 mt-12">
                {
                    services.map(({ caption, description, url, img }, index) => (
                        <ServiceCard
                            key={index}
                            caption={caption}
                            description={description}
                            url={url}
                            img={img}
                        />
                    ))
                }
            </div>
        </main>
    )
}

export default Services

export const ServiceCard = ({ caption, description, url, img }: ServiceTypes) => {
    const navigate = useNavigate()
    return (
        <BackgroundGradient className="w-full flex flex-col items-start bg-gray-900 py-7 px-5 rounded-[22px] cursor-pointer">
            <div className="w-full flex flex-col items-start">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-sky-600 to-emerald-400 flex justify-center items-center" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ' }}>
                    <img src={img} alt={caption} className="w-full h-full object-contain" />
                </div>
                <h1 className="text-2xl text-gray-200 text-start font-belanosima mt-5">{caption}</h1>
                <p className="text-gray-400 font-barlow text-sm">{description}</p>
            </div>
            <Button onClick={() => navigate(url)} className="text-gray-100 text-sm font-barlow px-4 py-2 flex justify-center items-center gap-1 bg-sky-500 hover:bg-emerald-500 mt-5" type="button">Get Started</Button>
        </BackgroundGradient>
    )
}

const services: ServiceTypes[] = [
    {
        caption: 'Subscription Management',
        description: 'TRiver offers a robust subscription management service, allowing businesses to automate recurring payments and manage subscription tiers effortlessly.',
        url: '/onboarding/subscription',
        img: SubscriptionImg
    },
    {
        caption: 'Salary Distributions',
        description: "Simplify salary distributions with TRiver's automated service.Calculate pro- rata payments accurately and streamline payroll processes for your employees.",
        url: '/onboarding/salary',
        img: SalaryImg
    }
]