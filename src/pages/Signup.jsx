import React from "react";

const Signup = () => {
    return (
        <div className="min-h-screen font-sans bg-gray-100 flex flex-col">
            <div className="flex-1 flex items-center justify-center w-full h-full">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 h-full animate-fade-in">
                    {/* Left: Form Section */}
                    <div className="flex flex-col justify-start bg-gray-100 w-full px-6 h-full animate-slide-in-left shadow-xl">
                        <header className="w-full flex flex-row items-center justify-center gap-4 py-4">
                            <img src="/Logo.png" alt="SkillBuddy Logo" className="w-30 h-30" />
                            {/* <h1 className="text-5xl font-bold text-gray-800">SkillBuddy</h1> */}
                        </header>

                        <form className="space-y-5 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>

                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-sm text-gray-600">
                                    I agree to the <a href="#" className="text-green-700 underline">terms & policy</a>
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white py-2 rounded-md font-medium hover:bg-green-800 transition"
                            >
                                Signup
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-4 text-gray-400">or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* Social Logins */}
                        <div className="flex justify-center gap-4 mt-4">
                            <button className="flex items-center border px-4 py-2 rounded-md shadow-sm transition-transform duration-300 hover:scale-105">
                                <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
                                <span className="ml-2 text-sm text-gray-700">Sign in with Google</span>
                            </button>
                            <button className="flex items-center border px-4 py-2 rounded-md shadow-sm transition-transform duration-300 hover:scale-105">
                                <img src="https://img.icons8.com/ios-filled/24/000000/mac-os.png" alt="Apple" />
                                <span className="ml-2 text-sm text-gray-700">Sign in with Apple</span>
                            </button>
                        </div>

                        {/* Sign in Redirect */}
                        <p className="text-sm text-center text-gray-700 mt-4">
                            Have an account? <a href="/login" className="text-blue-600 font-medium">Login</a>
                        </p>
                    </div>

                    {/* Right: Logo Section */}
                    <div className="hidden md:flex flex-col items-center justify-center bg-gray-100 p-6 h-full animate-slide-in-right">
                        <img
                            src="/login-bg1.png"
                            alt="SkillBuddy Logo"
                            className="opacity-90 w-full h-screen rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

