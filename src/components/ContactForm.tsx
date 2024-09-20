import React, {ChangeEvent, FormEvent, useRef, useState} from "react";
import { IFormData, IFormErrors } from "../utils/models";
import {config} from "../utils/Config";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const [errors, setErrors] = useState<IFormErrors>({
        name: "",
        email: "",
        mobile: ""
    });
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Update form data using the previous state
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData, [name]: value };

            // Validate the field and get the updated error state
            const updatedErrors = validateField(name, value);

            // Validate the entire form using the updated error state and form data
            validateForm(updatedFormData, updatedErrors);

            return updatedFormData;
        });
    };

    const validateField = (name: string, value: string): IFormErrors => {
        let newErrors: IFormErrors = { ...errors }; // Start with the current errors

        switch (name) {
            case "name":
                newErrors.name = !/^[a-zA-Z'\-\s]+$/.test(value) ? "Please enter a valid name" : "";
                break;
            case "email":
                newErrors.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email address" : "";
                break;
            case "mobile":
                newErrors.mobile = !/^\d{10}$/.test(value) ? "Please enter a valid 10-digit mobile number" : "";
                break;
            default:
                break;
        }

        // Update the state with the new errors
        setErrors(newErrors);

        // Return the updated error state for immediate form validation
        return newErrors;
    };

    const validateForm = (formData: IFormData, formErrors: IFormErrors) => {
        const isValid =
            Object.values(formErrors).every((error) => !error) && // Check if no errors
            Object.keys(formErrors).every((key) => formData[key as keyof IFormData] !== ""); // Check if all mandatory fields are non-empty

        setIsFormValid(isValid);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            let url = config.getGFormLinkUrl(formData);
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        maxLength={256}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`mt-1 block w-full ${errors.name ? "border-red-500" : "border-gray-300"} border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.name && (
                        <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        maxLength={256}
                        required
                        className={`mt-1 block w-full ${errors.email ? "border-red-500" : "border-gray-300"} border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.email && (
                        <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength={10}
                        required
                        className={`mt-1 block w-full ${errors.mobile ? "border-red-500" : "border-gray-300"} border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.mobile && (
                        <p id="mobile-error" className="mt-2 text-sm text-red-600">{errors.mobile}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={2000}
                        value={formData.message}
                        onChange={handleChange}
                        className={`mt-1 block w-full border-gray-300 border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out`}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
