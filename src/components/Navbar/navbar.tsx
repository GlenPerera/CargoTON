/* eslint-disable react-hooks/rules-of-hooks */
import "./navbar.css";
import { useState } from "react";

const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-black" href="#">
              <span className="sr-only">Home</span>
              <h3 className="text-4xl font-extrabold">
                Cargo
                <span className="Ton text-lg">Ton</span>
              </h3>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav
              aria-label="Global"
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block absolute md:relative top-16 left-0 md:top-auto md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40 md:z-auto`}
            >
              <ul className="flex flex-col md:flex-row items-center gap-6 text-sm p-4 md:p-0">
                <li>
                  <a
                    className="text-black-800 transition font-semibold hover:text-gray-500/75 text-xl"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-black-500 font-semibold transition hover:text-gray-500/75 text-xl"
                    href="#"
                  >
                    Pages
                  </a>
                </li>
                <li>
                  <a
                    className="text-black-500 transition font-semibold hover:text-gray-500/75 text-xl"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-black-500 transition font-semibold hover:text-gray-500/75 text-xl"
                    href="#"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 hidden md:flex">
                <a
                  className="bg-[yellow] px-5 py-2 text-sm font-medium text-black hover:bg-yellow-500"
                  href="#"
                >
                  GET A QUOTE
                </a>
                <a
                  className="bg-[black] px-5 py-2.5 text-sm font-medium text-white"
                  href="#"
                >
                  SIGN IN
                </a>
              </div>
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default navbar;
