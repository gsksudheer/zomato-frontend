import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { TiLocation } from 'react-icons/ti';
import { FaUser } from 'react-icons/fa';

const PcNavbar = () => {
  return (
    <div className='hidden lg:inline container mx-auto'>
        <div className="flex items-center gap-5 bg-white pt-2 px-40">
          <div className="w-30 h-7">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="FOOD" className="w-full h-full"/>
          </div>
          <div className="w-3/5 h-12 flex items-center border border-gray-200 rounded-md shadow-md">
            <div className="flex items-center w  border-r-2 pr-2" >
              <span className="text-red-500 w-8 h-6 mx-2">
                <TiLocation className="w-full h-full"/>
              </span>
              <input type="text" placeholder="Nandyal" className="w-36 h-full focus:outline-none"/>
              <MdArrowDropDown className="w-8 h-8"/>
            </div>
            <div className="flex items-center w-full h-full mx px-1">
              <FiSearch className="mx-2 w-12 h-5"/>
              <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="w-full focus:outline-none"/>
            </div>
          </div>
          <div className="flex items-center gap-5 ml-28">
            <button className="text-gray-400 text-xl font-light hover:text-gray-900">Log in</button>
            <button className="text-gray-400 text-xl font-light hover:text-gray-900">Sign up</button>
          </div>
      </div>
    </div>
  )
} 
const MobileNavbar = () => {
  return (
    <>
      <div className="lg:hidden w-full fixed z-40 flex items-center justify-between px-4 pt-2 top-0 bg-white shadow-lg">
        <div className="w-24">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="FOOD" className="w-full h-full"/>
        </div>
        <div className="flex items-center gap-5">
          <button className="bg-red-400 px-2 border rounded-2xl text-white py-1">use app</button>
          <span className="border-2 border-red-400 rounded-full p-3">
            <FaUser className="text-red-500"/>
          </span>
        </div>
      </div>
    </>
  )
}
const navbar = () => {
  return (
    <>
        <div className="lg:pb-10">
          <PcNavbar />
          <MobileNavbar />
        </div>
    </>
  )
}

export default navbar;