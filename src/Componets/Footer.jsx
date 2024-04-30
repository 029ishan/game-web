import React from "react";
import { FaFacebookF, FaInstagram, FaSteam } from "react-icons/fa";


import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <FaFacebookF color="blue" size={18} />,
    },
    {
      id: 2,
      icon: <FaInstagram color="blue" size={18} />,
    },
    {
      id: 3,
      icon: <FaSteam color="black" size={18} />,
    },
    
  ];
  return (
    <div className=" md:text-md text-sm overflow-hidden ">
      <div
        className=" w-full flex bg-gray-300 h-14 items-center font-varela md:text-md text-
      justify-between md:px-10 px-5 py-2">
        <h1>Lets Play</h1>

        <div className=" flex gap-x-4">
          {icons.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.icon}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" cursor-pointer flex font-varela  min-h-20 justify-evenly 
      w-full px-6 gap-x-2 pt-3  dark:text-white text-black">
        <section className=" w-1/4">
          {/* <h1 className=" font-bold text-violet-600">COMPANY NAME</h1> */}
          <p className=" line-clamp-3 md:line-clamp-5 lg:line-clamp-none items-center pt-7">
          Welcome to our gaming page, your ultimate destination for all things gaming.Join our vibrant community of fellow gamers and embark on epic quests together. Let the games begin!
          </p>
        </section>
        <section className=" w-1/4">
          <h1 className=" font-medium text-red-400 ml-2">About</h1>
          <ul className=" md:text-md text-xs lg:text-lg ml-2 underline">
            <li>Action</li>
            <li> Advantures </li>
            <li> Shooter</li>
            <li> Sports  Games</li>
            
            
          </ul>
        </section>
        <section className=" w-1/4">
          <h1 className=" font-medium text-red-500"> LINKS</h1>
          <ul className=" md:text-md text-xs lg:text-lg item-center">
            <li>Your Account</li>
            <li>Subscriptions</li>
            <li>Help</li>
          </ul>
        </section>
        <section className=" w-1/4 ">
          <h1 className=" font-medium text-red-500 mr-2">CONTACT US</h1>
          <ul className=" md:text-sm text-xs lg:text-md">
            <li className=" flex items-center gap-x-1">
            <FaHome className=" hidden md:block"/>KTM,Nepal</li>
            <li className=" flex items-center gap-x-1">
            <FaPhone className=" hidden md:block"/>+977-9867419278</li>
            <li className=" flex items-center gap-x-1 ">
            <FaMailBulk className=" hidden md:block"/>ishankhanal242@gmail.com@gmail.com</li>
          </ul>
        </section>
      </div>
      <div className=" bg-neutral-950 w-full text-indigo-300 font-madimi md:text-md 
      min-h-14 flex items-center justify-center text-sm">
      Ishan Khanal ©{new Date().getFullYear()} 
      <span className=" text-red-600 ml-1">Copyright</span>
      </div>
    </div>
  );
};

export default Footer;