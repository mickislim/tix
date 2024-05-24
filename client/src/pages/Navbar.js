import React from 'react';
import ticketMasterIcon from '../assets/ticketmaster-5.svg';
import searchIcon from '../assets/search.png'; // Ensure this path is correct
import accountAvatar from '../assets/account.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center flex-row justify-around bg-azure-deepblue lg:w-full">
      <div className="flex justify-start items-center">
        <div className="flex items-center justify-center h-20">
          <img src={ticketMasterIcon} alt="ticketmaster-logo" className="w-3/7" />
        </div>

        <div className="w-4/7 flex justify-center items-center ml-5">
          <input
            id="search-input"
            type="text"
            placeholder="       search for event or venue"
            className="w-80 h-10 flex items-center justify-center relative bg-blue-200"
          />
          <img src={searchIcon} alt="search-icon" className="h-6 absolute -translate-x-36" />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-5/12 mx-8">
        <ul className="flex items-start justify-center text-start text-1.5xl space-x-3 font-bold text-white">
          <li><a href="/">Concerts</a></li>
          <li><a href="/">Sports</a></li>
          <li><a href="/">More</a></li>
        </ul>

        <ul className="flex flex-row items-start justify-around w-1/3">
          <li className="w-6 h-2 items-center">
            <Link to="/create/ticket">
              <img src={accountAvatar} alt="account-avatar" className="scale-125" />
            </Link>
          </li>
          <li className="items-center">
            <a href="/" className="text-center text-white font-bold">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
