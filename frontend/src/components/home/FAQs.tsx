import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";


const FAQs = () => {
    return (
        <main className='w-full flex flex-col items-center lg:my-24 my-12 lg:px-20 md:px-16 px-4'>
            <h1 className="md:text-4xl text-2xl text-gray-200 font-belanosima">Frequently Asked Questions</h1>
            <p className="text-gray-400 font-barlow text-center md:w-[50%]">Have questions? We have answers!</p>

            <section className="lg:w-[80%] md:w-[85%] w-full bg-gray-900 rounded-md md:px-8 md:py-6 p-4 mt-12">
                <Accordion type="single" collapsible className="w-full font-barlow text-gray-100">
                    {
                        faqs.map(({ question, answer }, index) => (
                            <AccordionItem value={`item-${index}`} className=" last:border-none border-gray-700 py-2" key={index}>
                                <AccordionTrigger className="md:text-base text-start text-gray-200 ">{question}</AccordionTrigger>
                                <AccordionContent className="text-gray-400 text-base">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </section>
        </main>
    )
}

export default FAQs

const faqs: { question: string, answer: string }[] = [
    {
        "question": "What is TRiver?",
        "answer": "TRiver is a token streaming application that enables continuous, real-time transactions of tokens based on predefined criteria. It automates various financial processes such as salaries, subscriptions, rewards, and staking payouts without manual intervention."
    },
    {
        "question": "How does TRiver work?",
        "answer": "TRiver works by allowing users to set up token streams with specific parameters such as amount, duration, and conditions. These streams are then activated, and tokens are automatically distributed according to the predefined criteria."
    },
    {
        "question": "Is TRiver secure?",
        "answer": "Yes, TRiver prioritizes security and employs rigorous testing and auditing processes to ensure the safety and integrity of transactions. Additionally, it utilizes smart contracts on the Optimism blockchain, providing an extra layer of security."
    },
    {
        "question": "Can I customize my token streams?",
        "answer": "Yes, TRiver offers customization options to tailor token streams to your specific needs. You can configure parameters such as payment frequency, performance metrics for rewards, and subscription tiers."
    },
    {
        "question": "How do I get started with TRiver?",
        "answer": "To get started with TRiver, simply sign up for an account, configure your token streams, and activate them. Our user-friendly interface makes it easy to manage and monitor your streams in real-time."
    },
    {
        "question": "What support is available for TRiver users?",
        "answer": "TRiver provides comprehensive support for users, including documentation, tutorials, and a dedicated support team. If you have any questions or encounter any issues, you can reach out to us for assistance."
    }
];
