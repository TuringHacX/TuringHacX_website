/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import logo from '../../assets/turinhacx.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const buttons = [
    {
      text: "Home",
      link: "#",
      className:
        "block py-2 pl-3 pr-4 text-dark bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500",
    },
    {
      text: "About",
      link: "#about",
      className:
        "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    },
    {
      text: "Code of Conduct",
      link: "#code-of-conduct",
      className:
        "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    },
    {
      text: "Event Timeline",
      link: "/timeline",
      className:
        "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
    },
    
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-black opacity-80 text-2xl dark:backdrop-blur-md">
      <div className="max-w-screen-xl rouned- flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <img
            src={logo}
           
            className="h-32 mr-3"
            alt="Flowbite Logo"
          />
          
        </a>
        <div className="flex items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1400x1400/750x500/filters:focal(700x700:701x701):no_upscale():format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22310826/poptart1redrainbowfix_1.gif"
              alt="user photo"
            />
          </button>
          {/* Dropdown menu */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 round py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="flex overflow-x-hidden flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black opacity-80 backdrop-blur-3xl md:dark:bg-transparent">
            {buttons.map((button, index) => (
              <li key={index}>
                <a
                  href={button.link}
                  className={button.className}
                  aria-current={button.text === "Home" ? "page" : undefined}
                >
                  {button.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
