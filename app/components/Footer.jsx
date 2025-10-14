import React from 'react';
import Image from "next/image";
import { FaLinkedinIn, FaPhone, FaGithub, FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer border border-t-slate-200 text-white border-l-transparent border-r-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4">
          <div className="mb-4 sm:mb-0">
            <a href="#" className="mr-2 text-sm">Copyright © 2024</a>
          </div>
          <div className="text-center sm:text-right">
            <div className="flex justify-center sm:justify-end mb-2 ">
              <Link
                href="tel:+254740719423"
                className="inline-block mr-4"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center 
                      text-white transition duration-300 transform hover:scale-110 hover:bg-orange-600">
                  <FaPhone className="w-5 h-5" />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/clive-omondi/"
                target="_blank"
                className="inline-block mr-4"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center 
                      transition duration-300 transform hover:scale-110 hover:bg-blue-100">
                  <FaLinkedinIn className="text-blue-600 w-6 h-6" />
                </div>
              </Link>
              <Link
                href="https://github.com/CliveOuma"
                target="_blank"
                className="inline-block mr-4"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center 
                      transition duration-300 transform hover:scale-110 hover:bg-gray-700">
                  <FaGithub className="text-white w-6 h-6" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/clive_ouma"
                target="_blank"
                className="inline-block"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center 
                      transition duration-300 transform hover:scale-110 hover:bg-pink-100">
                  <FaInstagram className="w-6 h-6 text-pink-600" />
                </div>
              </Link>
              <div className="fixed bottom-5 right-5">
                <a href="https://wa.me/+254740719423" className="block">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-110">
                    <Image src="/assets/img/whatsapp.svg" alt="WhatsApp" width={3}
                      height={3} className="w-7 filter invert h-7" />
                  </div>
                </a>
              </div>
            </div>
            <p className="text-sm">All Rights Reserved<span> | Clive Ouma.</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
