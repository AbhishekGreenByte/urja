import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import React from "react";
import {config} from "../utils/Config";

const LocationCard:React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact
                    Information</h2>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-blue-500 mr-3"/>
                        <p className="text-gray-600">{config.getContact().address}</p>
                    </div>
                    <div className="flex items-center">
                        <a href={`tel:${config.getContact().phone}`}>
                            <div className="flex items-center justify-center">
                                <FaPhoneAlt className="text-blue-500 mr-3"/>
                                <p className="text-gray-600">{config.getContact().phoneLabel}</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href={`tel:${config.getContact().alternativePhone}`}>
                            <div className="flex items-center justify-center">
                                <FaPhoneAlt className="text-blue-500 mr-3"/>
                                <p className="text-gray-600">{config.getContact().alternativePhoneLabel}</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href={`mailto:${config.getContact().email}`}>
                            <div className="flex items-center justify-center">
                                <FaEnvelope className="text-blue-500 mr-3"/>
                                <p className="text-gray-600">{config.getContact().email}</p>
                            </div>

                        </a>

                    </div>
                </div>
            </div>
            <div className="h-full w-full">
                <iframe
                    title="Custom Location"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d127.54031022785391!2d84.87032412865956!3d19.31805187646652!2m2!1f301.8525610769698!2f0!3m2!1i1024!2i768!4f39.467533314697924!5e1!3m2!1sen!2sin!4v1726819407154!5m2!1sen!2sin"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default LocationCard;