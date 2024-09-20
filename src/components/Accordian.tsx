import {IAccordian} from "../utils/models";
import React, {useState} from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordian: React.FC<IAccordian> = ({ title,defaultClose, children }) => {

    const [isOpen, setIsOpen] = useState<boolean>(defaultClose?false:true);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium">{title}</span>
                {isOpen ? (
                    <FaChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                    <FaChevronDown className="h-5 w-5 text-gray-500" />
                )}
            </button>
            {isOpen && (
                <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Accordian;