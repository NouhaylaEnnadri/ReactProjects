import React from "react";
import { QuoteNanime_logo } from "../assets";
import DarkLight from "./DarkLight";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pt-2">
      <div className="navbar pl-6 pr-6 pt-2">
        <div className="navbar-start">
          {/* Dropdown Menu for Mobile View */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/AboutUs">About us</Link>
              </li>
              <li>
                <Link to="/AnimeQuiz">Anime quiz</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact us</Link>
              </li>
            </ul>
          </div>
          {/* Logo Link */}
          <Link to="/">
            <img
              src={QuoteNanime_logo}
              alt="logo"
              className="w-36 h-auto"
            />
          </Link>
        </div>
        {/* Navigation Links for Desktop View */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/comingSoon">About us</Link>
            </li>
            <li>
              <Link to="/comingSoon">Anime quiz</Link>
            </li>
            <li>
              <Link to="/comingSoon">Contact us</Link>
            </li>
          </ul>
        </div>
        {/* Dark/Light Mode Toggle */}
        <div className="navbar-end">
          <DarkLight />
        </div>
      </div>
    </div>
  );
};

export default Header;
