/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLinks } from "@/cms/UserSideLinks";
import { useCallback, useEffect, useRef } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SiStreamrunners } from "react-icons/si";
import { Link, NavLink, useLocation } from "react-router-dom";
import SideBarDropdown from "./SideBarDropdown";
import { RiArrowDownSFill, RiFundsLine } from "react-icons/ri";
import { RxDashboard, RxUpdate } from "react-icons/rx";
import { GrServices } from "react-icons/gr";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { IoCreateOutline } from "react-icons/io5";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { useCheckRegisteredUser } from "@/hooks/useCheckRegisteredUser";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";


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
                return <GrServices />;
            case 2:
                return <RiFundsLine />;
            case 3:
                return <BiMoneyWithdraw />
            default:
                return "";
        }
    }, [])

    const renderDropdownCaptionIcons = useCallback((element: number) => {
        switch (element) {
            case 2:
                return <MdOutlineAddShoppingCart />;
            case 3:
                return <RiSecurePaymentFill />
            case 4:
                return <GiPayMoney />
            default:
                return "";
        }
    }, [])


    const renderDropdownIcons = useCallback((element: number) => {
        switch (element) {
            case 0:
                return <IoCreateOutline />;
            case 1:
                return <RxUpdate />;
            case 2:
                return <HiOutlineViewfinderCircle />;
            default:
                return "";
        }
    }, [])

    const { address } = useWeb3ModalAccount()

    const user: any = useCheckRegisteredUser(address);

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
                    Welcome Back {user?.name}
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
                                        {
                                            link.url ?
                                                <NavLink
                                                    to={link.url}
                                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 text-gray-300 duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:w-0.5 before:transition-all before:duration-200  before:bg-emerald-400 hover:before:h-full ${pathname === link.url ?
                                                        'before:h-full' : 'before:h-0'
                                                        }`} onClick={handleCloseSideBar}
                                                >
                                                    {renderIcons(index)}
                                                    {link.name}
                                                </NavLink>
                                                : <SideBarDropdown className="w-full">
                                                    {(handleClick, open) => (
                                                        <div className='w-full'>
                                                            <span className='group cursor-pointer relative flex items-center gap-2.5 rounded-sm py-2 px-4 text-gray-300 duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:w-0.5 before:transition-all before:duration-200  before:bg-emerald-400 hover:before:h-full'
                                                                onClick={() =>
                                                                    handleClick()
                                                                }>
                                                                {renderDropdownCaptionIcons(index)}
                                                                {link.name}
                                                                <span className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 ${open && 'rotate-180'
                                                                    }`}>
                                                                    <RiArrowDownSFill className="text-xl" />
                                                                </span>
                                                            </span>
                                                            {/* <!-- Dropdown Menu Start --> */}
                                                            <div
                                                                className={`translate transform overflow-hidden transition-all duration-300 ${!open && 'hidden'
                                                                    }`}
                                                            >
                                                                <ul className="my-1 flex flex-col pl-4 gap-1">
                                                                    {
                                                                        link?.subLinks?.map((sublink, index) => (
                                                                            <li key={index}>
                                                                                <NavLink onClick={handleCloseSideBar}
                                                                                    to={sublink.url} className={`group relative flex items-center gap-2 rounded-sm py-1 text-sm px-4 text-gray-400 duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:w-0.5 before:transition-all before:duration-200  before:bg-emerald-400 hover:before:h-full ${pathname === sublink.url || pathname.includes(sublink.url) ?
                                                                                        'before:h-full' : 'before:h-0'
                                                                                        }`}>
                                                                                    {renderDropdownIcons(index)}
                                                                                    {sublink.name}
                                                                                </NavLink>
                                                                            </li>
                                                                        ))
                                                                    }

                                                                </ul>
                                                            </div>
                                                            {/* <!-- Dropdown Menu End --> */}
                                                        </div>
                                                    )}
                                                </SideBarDropdown>
                                        }

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
                        <h3 className="text-gray-400 text-base ml-2 font-barlow">{user?.name}</h3>
                    </div>

                </nav>
                {/* <!-- Sidebar Menu --> */}


            </div>

        </aside>
    )
}

export default SideBar