import NavBar from "../components/NavBar";
import React, {ChangeEvent, useState} from 'react';
import { FaQrcode, FaUniversity } from 'react-icons/fa';
import {config} from "../utils/Config";

const Donate:React.FC = () => {
    const [imageUrls, setImageUrls] = useState<ImageData[]>([]);

    const [donationMethod, setDonationMethod] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    const handleMethodChange = (method: string) => {
        setDonationMethod(method);
        setAmount('');
    };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const validateUPI = (upi: string): boolean => {
        const upiRegex = /^[\w.-]+@[\w.-]+$/;
        return upiRegex.test(upi);
    };

    return (
        <div>
            <NavBar active="Donate"/>
            <div className="pt-16 bg-gray-100 w-full h-screen">
                <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8"
                     style={{backgroundImage: `url(${config.getImageUrl('donation_banner')})`}}>
                    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-xl">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Donate Now</h2>
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
                                        <img
                                            src={config.getImageUrl("qrcode")}
                                            alt="QR Code"
                                            className="w-48 h-48 object-cover rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div
                                        className="flex justify-center font-bold">{config.getPaymentDetails().upi}</div>
                                    <div className="flex justify-center font-bold text-center">{config.getPaymentDetails().name}</div>
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
    )
}

export default Donate;