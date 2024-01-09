"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HomeInput from './HomeInput';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-gray-900 top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <img
                  className="h-8 w-auto"
                  src="https://static.wikia.nocookie.net/logopedia/images/5/53/Paladins_Icon.png"
                  alt="logo"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Open</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Close</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-lg text-gray-300 py-2 md:px-3 text-center border-b-2 md:border-b-0 hover:bg-blue-900 border-blue-900 md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-lg text-gray-300 py-2 px-3 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="#" onClick={() => setNavbar(!navbar)}>
                    Champions
                  </Link>
                </li>
                <li className="text-lg text-gray-300 py-2 px-3 text-center border-b-2 md:border-b-0 hover:bg-blue-600 border-blue-900 md:hover:text-blue-600 md:hover:bg-transparent">
                  <HomeInput />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;