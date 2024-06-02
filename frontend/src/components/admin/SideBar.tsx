import { useCallback, useEffect, useRef } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SiStreamrunners } from "react-icons/si";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { NavLinks } from "@/cms/AdminSideLinks";
import { FaUsers } from "react-icons/fa6";
import { IoCreateOutline, IoTodayOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { MdCalendarMonth } from "react-icons/md";


const SideBar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean, setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const location = useLocation();
    const { pathname } = location;

    const handleCloseSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    useEffect(() => {
        const toggleScroll = () => {
            document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
        };
        toggleScroll();

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [sidebarOpen]);

    const renderIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <RxDashboard />;
            case 1:
                return <FaUsers />;
            case 2:
                return <IoCreateOutline />;
            case 3:
                return <RxUpdate />;
            case 4:
                return <IoTodayOutline />;
            case 5:
                return <MdCalendarMonth />;
            default:
                return "";
        }
    }, [])


    return (
        <aside
            ref={sidebar}
            className={`absolute font-barlow left-0 top-0 z-[9999] flex h-screen w-72 flex-col overflow-y-hidden bg-gray-800 duration-300 ease-linear lg:static lg:translate-x-0 rounded-lg ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            {/* <!-- SIDEBAR HEADER --> */}
            <div className='flex flex-col gap-2 font-barlow px-6 py-8 lg:py-6.5'>
                <div className="flex items-center justify-between gap-2  ">
                    <Link to='/user' className="flex items-center bg-gradient-to-r from-sky-400 to-emerald-400 text-transparent bg-clip-text gap-1">
                        <SiStreamrunners className="md:text-4xl text-3xl text-sky-400" />
                        <span className=" font-belanosima md:text-xl text-lg">TRiver</span>
                    </Link>

                    <button
                        ref={trigger}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                        className="block lg:hidden text-white"
                    >
                        <IoIosArrowRoundBack className="text-2xl" />
                    </button>
                </div>
                <h1 className='text-sm md:text-sm text-gray-200 uppercase'>
                    Welcome Back
                </h1>
            </div>

            {/* <!-- SIDEBAR HEADER --> */}


            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-3 pb-4 px-4 lg:mt-3 lg:px-6">
                    {/* <!-- Menu Group --> */}
                    <div>
                        <ul className="font-barlow flex flex-col gap-1.5">
                            {/* <!-- Menu Item Calendar --> */}
                            {
                                NavLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={link.url}
                                            className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 text-gray-300 duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:w-0.5 before:transition-all before:duration-200  before:bg-emerald-400 hover:before:h-full ${pathname === link.url ?
                                                'before:h-full' : 'before:h-0'
                                                }`} onClick={handleCloseSideBar}
                                        >
                                            {renderIcons(index)}
                                            {link.name}
                                        </NavLink>


                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* <!-- Sidebar Footer --> */}
                    <div className="w-full flex flex-col justify-center items-start ml-8 gap-1.5 mt-8">
                        <div className="w-[30%] rounded-lg overflow-hidden border-2 border-gray-400">
                            <img src={`https://github.com/shadcn.png`} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-gray-400 text-base ml-2 font-barlow">Signor</h3>
                    </div>

                </nav>
                {/* <!-- Sidebar Menu --> */}


            </div>

        </aside>
    )
}

export default SideBar