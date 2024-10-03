import React from "react";
import {FaSearch, FaHome} from "react-icons/fa";
import NavBar from "../components/NavBar";
import {Link} from "react-router-dom";
import {config} from "../utils/Config";

const ErrorPage = () => {
    const popularPages = [
        {name: "About Us", url: "/about"},
        {name: "Products", url: "/products"},
        {name: "Contact", url: "/contact"},
    ];

    return (
        <div>
            <NavBar/>
            <div className="pt-16 bg-gray-50 w-full h-screen">
                <div className="h-full bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8 text-center">
                        <div>
                            <img
                                className="mx-auto h-48 w-auto"
                                src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                                alt="404 Error Illustration"
                            />
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                                Oops! Page Not Found
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                It seems you've ventured into uncharted territory. Don't worry, even the best explorers
                                get lost sometimes!
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">
                            <Link to={config.getDefaultRoute()}>
                                <button
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                >

                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaHome className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                                        Back to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;