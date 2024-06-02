import mockup from "../../assets/mockup2.png";


const About = () => {
    return (
        <main className='w-full flex flex-col items-start my-24'>
            <div className="w-full grid md:grid-cols-2 gap-20 lg:px-28 px-4">
                <div className="w-full relative before:bg-gradient-to-t before:absolute before:w-full before:h-full before:from-gray-950 before:to-gray-950/50 flex justify-between items-center">

                    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800  absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div className="h-[46px] w-[3px] bg-gray-800  absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div className="h-[64px] w-[3px] bg-gray-800  absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white border-2 border-gray-950">
                            <img src={mockup} className=" w-[272px] h-[572px]" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                    <h1 className="text-3xl text-gray-200 font-belanosima">About TRiver</h1>
                    <p className="text-gray-400 font-barlow">At TRiver, we're revolutionizing decentralized finance (DeFi) with our innovative token streaming application. Our mission is to empower individuals and businesses to automate financial processes seamlessly, making transactions faster, more efficient, and hassle-free.</p>
                    <h3 className="text-xl text-gray-200 font-belanosima mt-4">Our Vision</h3>
                    <p className="text-gray-400 font-barlow">We envision a future where financial transactions are as fluid as streams, where tokens flow effortlessly to their intended destinations without the need for manual intervention. With TRiver, we're turning this vision into reality by providing a secure and user-friendly platform for continuous, real-time token streaming.</p>
                    <h3 className="text-xl text-gray-200 font-belanosima mt-4">Our Mission</h3>
                    <p className="text-gray-400 font-barlow">Our mission at TRiver is simple: to create user-friendly solutions that streamline financial transactions in the decentralized ecosystem. We're committed to innovating DeFi with cutting-edge technology while ensuring the security and privacy of our users' assets and data. By doing so, we aim to make DeFi accessible to all, regardless of geographical or socioeconomic barriers.</p>
                </div>
            </div>
        </main>
    )
}

export default About