import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 200px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            {isVisible && (
                <Button onClick={scrollToTop} className="bg-emerald-500 text-white rounded-md p-3 hover:bg-emerald-600 transition duration-300 focus:outline-none">
                    <MdKeyboardDoubleArrowUp className="text-2xl" />
                </Button>
            )}
        </div>
    )
}

export default ScrollToTopButton