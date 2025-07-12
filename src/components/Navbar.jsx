import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 border-b border-gray-200 shadow-sm px-3 py-2 flex justify-between items-center relative w-full">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/Logo.png" alt="SkillBuddy Logo" className="h-20 w-20 object-contain" />
      </div>
      {/* Navigation Items */}
      <ul className="flex gap-8 font-medium text-gray-900">
        <li className="hover:text-black cursor-pointer">🏠 Dashboard</li>
        <li className="hover:text-black cursor-pointer">📚 Courses</li>
        <li className="hover:text-black cursor-pointer">📈 Progress</li>
        <li className="hover:text-black cursor-pointer">🤖 AI Buddy</li>
      </ul>
      {/* Logout Button */}
      <div className="flex items-center gap-4">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
