import ContactForm from "./Form"


const Contact = () => {
    return (
        <main className='w-full flex flex-col items-center lg:my-24 my-12 lg:px-20 md:px-16 px-4'>
            <div className="lg:w-[80%] w-full grid md:grid-cols-2 gap-8 bg-gray-900 rounded-md md:py-24 py-16 h-auto">
                <div className="flex flex-col items-center relative px-6 justify-center">
                    <div className="w-52 h-52 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-transparent" id="contact"></div>
                    <div className="flex flex-col items-start px-8 gap-4 absolute z-10 ">
                        <h1 className="text-5xl text-gray-200 font-belanosima">Contact Us</h1>
                        <p className="text-gray-400 font-barlow text-center ">Get in touch with us to learn more about our services and how we can help you achieve your financial goals.</p>
                    </div>

                </div>
                <div className="flex flex-col items-start px-8 justify-center">
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}

export default Contact