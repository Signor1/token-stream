import { TbLoaderQuarter } from "react-icons/tb";

const Preloader = () => {
    return (
        <section className='w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-950 overflow-hidden z-[99999]'>
            <h2 className="text-gray-200 font-barlow text-lg md:text-xl flex items-center gap-1">
                <TbLoaderQuarter className="animate-spin text-4xl mr-3" />
                Loading...
            </h2>
        </section>
    )
}

export default Preloader