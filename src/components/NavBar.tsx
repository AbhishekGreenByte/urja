import React, {useState} from 'react';
import {FaHome, FaCalendarAlt, FaInfoCircle, FaEnvelope, FaBars} from 'react-icons/fa';
import {config} from "../utils/Config";
import {Link} from "react-router-dom";
import {IconType} from "react-icons/lib/iconBase";
import {INavBarProps} from "../utils/models";

const Navbar:React.FC<INavBarProps> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = config.getMenuItems();

    return (
        <nav className="bg-[#F6F6F6] shadow-lg fixed w-full h-16 top-0 z-10 ">
            <div className="container mx-auto px-4 w-full h-full">
                <div className="flex justify-center items-center w-full h-full">
                    <div className="flex justify-between items-center w-full h-full ">
                        <Link to={config.getDefaultRoute()}>
                            <div className="flex justify-center items-center cursor-pointer">
                                <img src={config.getImageUrl("logo")} className="w-12 h-12 object-cover"/>
                                <div className="text-xl font-medium text-gray-600">
                                    {config.getCompanyName()}
                                </div>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            {menuItems.map((item, index) => (
                                <Link key={index} to={config.getMenuItemRoute(item)}>
                                    <div
                                        className={`flex items-center justify-center hover:text-primary transition duration-300 ${props.active && props.active === item ? 'text-primary' : 'text-gray-600'}`}>
                                        {<span
                                            className="mr-2">{React.createElement(config.getIcon(item) as IconType)}</span>}
                                        <span>{item}</span>
                                    </div>

                                </Link>
                            ))}
                        </div>
                        <div>
                            <Link to={config.getMenuItemRoute(config.getDonateString())}>
                                <button
                                    className={`hidden ${props.active && props.active === "Donate" ? '' : 'md:block'} bg-primary text-white px-4 py-2 rounded hover:bg-lightPrimary transition duration-300`}>
                                    <div className="flex items-center justify-center">
                                        <span
                                            className="mr-2">{React.createElement(config.getIcon(config.getDonateString()) as IconType)}</span>
                                        <span>{config.getDonateString()}</span>
                                    </div>
                                </button>
                            </Link>
                        </div>

                        <button
                            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <FaBars size={24}/>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div
                className={`md:hidden ${
                    isMenuOpen ? 'block' : 'hidden'
                } bg-white w-full shadow-md transition-all duration-300 ease-in-out pt-3`}
            >
                <div className="container mx-auto px-4 py-2">
                    {menuItems.map((item, index) => (
                        <Link key={index} to={config.getMenuItemRoute(item)}>
                            <div className={`flex items-center text-gray-600 hover:text-primary py-2 transition duration-300 ${props.active && props.active === item ? 'text-primary' : 'text-gray-600'}`}>
                                {<span
                                    className="mr-2">{React.createElement(config.getIcon(item) as IconType)}</span>}
                                <span>{item}</span>
                            </div>

                        </Link>
                    ))}

                    <Link to={config.getMenuItemRoute(config.getDonateString())}>
                        <button
                            className={`${props.active && props.active === "Donate" ? 'hidden' : ''} bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-full mt-2`}>
                            <div className="flex items-center justify-center">
                                <span className="mr-2">{React.createElement(config.getIcon(config.getDonateString()) as IconType)}</span>
                                <span>{config.getDonateString()}</span>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;