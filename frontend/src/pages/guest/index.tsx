import WhyStream from "../../components/home/WhyStream";
import About from "../../components/home/About";
import HeroSection from "../../components/home/HeroSection";
import MaxWrapper from "../../components/shared/MaxWrapper";
import HowItWorks from "../../components/home/HowItWorks";
import Services from "../../components/home/Services";
import Testimonial from "../../components/home/Testimonial";
import NavBar from "../../components/shared/NavBar";
import Footer from "../../components/shared/Footer";
import { Element } from "react-scroll"
import FAQs from "../../components/home/FAQs";
import Contact from "../../components/home/Contact";
import StreamPlug from "@/components/home/StreamPlug";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

const Home = () => {
    const { isConnected } = useWeb3ModalAccount();
    const navigate = useNavigate();


    const change = useCallback(async () => {
        if (isConnected) {
            navigate("/signup");
        } else if (!isConnected) {
            navigate("/");
        }
    }, [isConnected, navigate]);

    useEffect(() => {
        change();
    }, [change, isConnected]);

    return (
        <main className="w-full min-h-screen flex flex-col">
            <NavBar />
            <MaxWrapper className="w-full flex flex-col">
                <Element name="home" className="w-full">
                    <HeroSection />
                </Element>
                <Element name="about" className="w-full" >
                    <About />
                </Element>
                <StreamPlug />
                <WhyStream />
                <HowItWorks />
                <Element name="services" className="w-full" >
                    <Services />
                </Element>
                <Testimonial />
                <Element name="faqs" className="w-full" >
                    <FAQs />
                </Element>
                <Element name="contact" className="w-full" >
                    <Contact />
                </Element>
            </MaxWrapper>
            <Footer />
        </main>
    )
}

export default Home