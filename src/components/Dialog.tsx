import React from "react";
import {IDialogProps} from "../utils/models";

const Dialog: React.FC<IDialogProps> = ({ member, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-2">{member.name}</h2>
            <p className="text-gray-600 text-center mb-4">{member.role + " | " + member.responsibility}</p>
            <p className="text-gray-800 mb-6">{member.details}</p>
            <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

export default Dialog;