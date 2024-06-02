import { RxDiscordLogo } from "react-icons/rx"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { LegalLinks, NavLinks, OtherLinks } from "../../cms/Navlinks"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link as Spy } from 'react-scroll';

const Footer = () => {
    // state for year
    const [year, setYear] = useState<string | number>("");

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [year]);

    return (
        <footer className="w-full lg:h-[560px] md:h-[740px] h-[960px] display flex justify-center items-end relative">
            <div className="w-full ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0ea5e9" fill-opacity="1" d="M0,0L48,48C96,96,192,192,288,218.7C384,245,480,203,576,176C672,149,768,139,864,165.3C960,192,1056,256,1152,234.7C1248,213,1344,107,1392,53.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
            <main className="flex flex-col md:w-[85%] w-[90%] h-full absolute top-0 bg-gray-900 rounded-md">
                <div className="w-full h-auto md:py-16 md:px-10 py-10 px-6 flex md:flex-row flex-col gap-3 justify-between md:items-center items-start border-b border-gray-700">
                    <h1 className="lg:text-3xl md:text-2xl text-xl text-gray-200 font-light font-belanosima">Get Regular Updates</h1>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" className="bg-gray-900 border-gray-600 focus-visible:ring-sky-400 font-barlow text-gray-200" placeholder="Email" />
                        <Button type="button" className="text-gray-100 text-sm font-barlow px-4 py-2 bg-sky-500 hover:bg-emerald-500 ">Subscribe</Button>
                    </div>
                </div>

                <section className="w-full md:py-16 py-10 px-8 h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-8 border-b border-gray-700">
                    <div className="bg-gradient-to-r from-sky-600 to-emerald-500 p-6 rounded-md flex flex-col justify-center gap-3 items-center">
                        <h1 className="md:text-xl text-gray-200 text-center font-belanosima">Join Our Blockchain Community</h1>
                        <Button type="button" className="text-gray-100 text-sm font-barlow px-4 py-2 bg-gray-900 flex items-center gap-1 ">
                            <RxDiscordLogo />
                            Join
                        </Button>
                    </div>

                    <div className="flex flex-col justify-start gap-3 md:items-center items-start">
                        <h3 className="md:text-xl text-gray-200 text-center font-belanosima">Quick Links</h3>
                        {
                            NavLinks.map(({ name, path }, index) => (
                                <Spy to={path} smooth={true} spy={true} activeClass="" duration={500} key={index} className="text-gray-400 font-barlow text-sm transition-all duration-200 hover:mr-2">{name}</Spy>
                            ))
                        }
                    </div>

                    <div className="flex flex-col justify-start gap-3 md:items-center items-start">
                        <h3 className="md:text-xl text-gray-200 text-center font-belanosima">Other Links</h3>
                        {
                            OtherLinks.map(({ name, path }, index) => (
                                <Link to={path} key={index} className="text-gray-400 font-barlow text-sm transition-all duration-200 hover:mr-2">{name}</Link>
                            ))
                        }
                    </div>

                    <div className="flex flex-col justify-start gap-3 md:items-center items-start">
                        <h3 className="md:text-xl text-gray-200 text-center font-belanosima">Legal Links</h3>
                        {
                            LegalLinks.map(({ name, path }, index) => (
                                <Link to={path} key={index} className="text-gray-400 font-barlow text-sm transition-all duration-200 hover:mr-2">{name}</Link>
                            ))
                        }
                    </div>
                </section>

                <div className="w-full h-full flex px-8 justify-center items-center">
                    <p className="text-gray-400 font-barlow text-sm">Copyright © {year} StreamFlow. All rights reserved</p>
                </div>
            </main>
        </footer>
    )
}

export default Footer