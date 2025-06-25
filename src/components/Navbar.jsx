import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/features", label: "Features" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ];

  return (
    <nav className="bg-white text-gray-900 px-10 shadow-lg flex justify-between items-center border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="text-2xl font-bold flex items-center gap-2"
      >
        <img
          src="/Logo.png"
          className="object-contain w-35 h-35"
          alt="SkillBuddy Logo"
        />
        {/* SkillBuddy */}
      </Link>

      {/* Nav Links */}
      <div className="space-x-6 hidden sm:flex">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-xl font-medium ${
              location.pathname === link.path
                ? "text-green-700 underline"
                : "text-gray-500 hover:text-green-700 transition"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
