import React, { ChangeEvent, FormEvent, useState } from "react";
import { IFormData, IFormErrors } from "../utils/models";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<IFormErrors>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate current field and the whole form
        validateField(name, value);
        validateForm({ ...formData, [name]: value }); // Validate the entire form after updating the field
    };

    const validateField = (name: string, value: string) => {
        switch (name) {
            case "name":
                if (!/^[a-zA-Z'\-\s]+$/.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, name: "Please enter a valid name" }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, name: "" }));
                }
                break;
            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    setErrors(prevErrors => ({ ...prevErrors, email: "Please enter a valid email address" }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, email: "" }));
                }
                break;
            // Add additional field validations here if needed
            default:
                break;
        }
    };

    const validateForm = (formData: IFormData) => {
        const isValid = Object.values(errors).every(error => !error) &&
            Object.values(formData).every(field => field !== "");
        setIsFormValid(isValid);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        maxLength={400}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
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
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
}

export default ContactForm;
