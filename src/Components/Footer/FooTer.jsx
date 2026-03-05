import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const FooTer = () => {
  const socialClass = "flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm";
  
  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
       
        <div className="lg:col-span-1">
          <h2 className="text-white text-xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-sm leading-relaxed text-gray-500">
           CS — Ticket System is a comprehensive support platform designed to streamline customer queries and technical issues. We empower teams to deliver faster resolutions and maintain high-quality service standards through real-time tracking and efficient task management.
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Mission</li>
            <li className="hover:text-white cursor-pointer">Contact Sales</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Products & Services</li>
            <li className="hover:text-white cursor-pointer">Customer Stories</li>
            <li className="hover:text-white cursor-pointer">Download Apps</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <div className="space-y-3">
            <a href="#" className={socialClass}><FaXTwitter /> @CS — Ticket System</a>
            <a href="#" className={socialClass}><FaLinkedinIn /> @CS — Ticket System</a>
            <a href="#" className={socialClass}><FaFacebookF /> @CS — Ticket System</a>
            <a href="mailto:support@cst.com" className={socialClass}><IoMailOutline /> support@cst.com</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-600">
        © 2026 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};
export default FooTer;