import NavBar from "../components/NavBar";
import React, {useState} from 'react';
import {FaQrcode, FaUniversity} from 'react-icons/fa';
import {config} from "../utils/Config";
import {UpiApps} from "../utils/models";
import { FaWhatsapp } from "react-icons/fa";
import { SiPhonepe, SiGooglepay, SiPaytm } from "react-icons/si";
import QrCode from "../components/QrCode";
import {getUpiAppLink} from "../utils/utils";

const Donate:React.FC = () => {

    const [donationMethod, setDonationMethod] = useState<string>('');
    const [appType, setAppType] = useState<UpiApps>(UpiApps.UPI);

    const buttons = [
        { name: "UPI", icon: FaQrcode, color: "bg-green-400", value: UpiApps.UPI },
        { name: "PhonePe", icon: SiPhonepe, color: "bg-purple-600", value: UpiApps.PHONEPE },
        { name: "GPay", icon: SiGooglepay, color: "bg-green-500", value: UpiApps.GPAY },
        { name: "Paytm", icon: SiPaytm, color: "bg-blue-500", value: UpiApps.PAYTM },
    ];


    const handleMethodChange = (method: string) => {
        setDonationMethod(method);
    };

    const getUpiLink = () => {
        return getUpiAppLink(appType);
    }

    const handleUpiCall = () => {
        let url = getUpiLink();
        window.open(url, "_blank", "noopener,noreferrer");
    }


    return (
        <div>
            <NavBar active="Donate"/>
            <div className="pt-16 bg-gray-100 w-full h-screen">
                <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8"
                     style={{backgroundImage: `url(${config.getImageUrl('donation_banner')})`}}>
                    <div className="flex justify-center items-center w-full">
                        <div className="max-w-md w-full space-y-4 bg-white p-10 rounded-xl shadow-xl">
                            <div>
                                <h2 className=" text-center text-3xl font-extrabold text-gray-900">Donate Now</h2>
                                <p className="mt-2 text-center text-sm text-gray-600">Choose your preferred donation
                                    method</p>
                            </div>
                            <div className="mt-8 space-y-6">
                                <div className="flex items-center justify-center space-x-4">
                                    <button
                                        onClick={() => handleMethodChange('UPI')}
                                        className={`flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                                            donationMethod === 'UPI'
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <FaQrcode className="mr-2"/>
                                        UPI
                                    </button>
                                    <button
                                        onClick={() => handleMethodChange('BANK')}
                                        className={`flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
                                            donationMethod === 'BANK'
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <FaUniversity className="mr-2"/>
                                        Bank Transfer
                                    </button>
                                </div>

                                {donationMethod === 'UPI' && (
                                    <div className="space-y-4">
                                        <div className="flex justify-center">
                                            <QrCode link={getUpiLink()} />
                                        </div>
                                        <div className="flex justify-center">
                                            <span className="font-medium text-gray-600 cursor-pointer">{config.getPaymentDetails().upi}</span>
                                        </div>
                                        <div
                                            className="flex justify-center text-center font-medium text-gray-600">
                                            {config.getPaymentDetails().name}
                                        </div>

                                        <div className="flex justify-center items-center gap-6">
                                            {buttons.map((button) => (
                                                <button
                                                    key={button.name}
                                                    className={`${button.color} text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${button.color.split('-')[1]}-400 active:scale-95`}
                                                    aria-label={`Pay with ${button.name}`}
                                                    onClick={() => setAppType(button.value)}
                                                >
                                                    <button.icon className="text-2xl md:text-3xl lg:text-4xl" />
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            type="submit"
                                            onClick={handleUpiCall}
                                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Click Here to Donate via {appType}
                                        </button>
                                    </div>
                                )}

                                {donationMethod === 'BANK' && (
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-md shadow">
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">Bank Details</h3>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-bold">Account Number - </span>
                                                {config.getPaymentDetails().accountNumber}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-bold">IFSC - </span>
                                                {config.getPaymentDetails().ifsc}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-bold">Beneficiary Name - </span>
                                                {config.getPaymentDetails().name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-bold">Bank Number - </span>
                                                {config.getPaymentDetails().bank}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-bold">Phone - </span>
                                                {config.getPaymentDetails().mobile}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-bold">Email - </span>
                                                {config.getPaymentDetails().email}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;