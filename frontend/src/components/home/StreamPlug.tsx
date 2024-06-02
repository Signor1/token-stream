import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GeminiEffect } from "../ui/geminiEffect";


const StreamPlug = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <div
            className="h-[400vh] bg-transparent w-full rounded-md relative lg:pt-12 overflow-clip"
            ref={ref}
        >
            <GeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
                title="Automate Your Token Streams"
                description="Plug in your tokens to streamline your distribution process and subscriptions. TRiver's intuitive interface makes it easy to activate, customize, and manage your streams in real-time."
            />
        </div>
    )
}

export default StreamPlug