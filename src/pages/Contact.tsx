import NavBar from "../components/NavBar";
import React from "react";
import ContactForm from "../components/ContactForm";
import LocationCard from "../components/LocationCard";


const Contact:React.FC = () => {
    return (
        <div>
            <NavBar active="Contact"/>
            <div className="pt-16 bg-gray-50 w-full h-screen box-border">
                <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Contact Us</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <LocationCard/>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;