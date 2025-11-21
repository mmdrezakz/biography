import React from 'react';
import { FaTelegramPlane, FaGithub, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export default function Footer({darkmode}) {
  return (
    <footer className={`fixed bottom-0 w-full z-50 font-vazir mt-10 px-4 py-6 font-Vazirmatn  shadow-gray-800 shadow-md bg-linear-to-r/decreasing text-slate-200 transition-colors duration-500 ${darkmode ?  " dark:from-black  dark:to-gray-900":" to-gray-400 from-gray-900 "} `}>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 mx-auto max-w-6xl">
        {/* Site Name */}
        <div className="font-semibold text-lg">
          🧍 <span className="text-gray-900 dark:text-gray-100"> همه چیز درباره ی من </span>
        </div>
      <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm text-center">
        © {new Date().getFullYear()} MohammadrezaKazemi | طراحی شده با ❤️ توسط محمدرضا کاظمی
      </div>
        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a href="https://t.me/Mmdreza_kz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300">
            <FaTelegramPlane />
          </a>
          <a href="https://github.com/mmdrezakz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://instagram.com/mamrez.kz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="tel:+989936494409" className="hover:text-gray-600 dark:hover:text-gray-300">
            <FaPhoneAlt />
          </a>
        </div>
      </div>


      {/* Bottom Text */}
    </footer>
  );
}