import React, { useEffect, useState } from 'react'
import { useUiContext } from '../UiContext';

function Header() {
    const [isBlurred, setIsBlurred] = useState(false);
    const { isOpen, toggleMenu } = useUiContext();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    console.log(isOpen)
    return (
        <div>
            <header className={`pb-4 lg:pb-0 fixed top-0 z-50 w-full ${isBlurred ? 'bg-gradient-to-b from-transparent to-gray-200' : 'bg-white'}`} style={{ backdropFilter: isBlurred ? 'blur(10px)' : '' }}>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* lg+ */}
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <img
                                    className="w-auto h-8 lg:h-10"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <button
                            type="button"
                            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                            onClick={toggleMenu}
                        >
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg
                                className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 8h16M4 16h16"
                                />
                            </svg>
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg
                                className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                products{" "}
                            </a>
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                Services{" "}
                            </a>
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                Team{" "}
                            </a>
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                            >
                                {" "}
                                About Us{" "}
                            </a>
                        </div>
                        <a
                            href="#"
                            title=""
                            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                        >
                            {" "}
                            Contact us{" "}
                        </a>
                    </nav>
                    {/* xs to lg */}
                    {isOpen && (
                        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                            <div className="flow-root">
                                <div className="flex flex-col px-6 -my-2 space-y-1">
                                    <a
                                        href="#"
                                        title=""
                                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        Products
                                    </a>
                                    <a
                                        href="#"
                                        title=""
                                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        Services
                                    </a>
                                    <a
                                        href="#"
                                        title=""
                                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        Team
                                    </a>
                                    <a
                                        href="#"
                                        title=""
                                        className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                                    >
                                        About Us
                                    </a>
                                </div>
                                <a
                                    href="#"
                                    title=""
                                    className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
                                    role="button"
                                >
                                    Contact us
                                </a>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

        </div>
    )
}

export default Header