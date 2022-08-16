import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Nav({ currentPage, handlePageChange }) {

  const [navi, setNavi] = useState(false);

  const tabs = [
    {
      id: 1,
      tab: "About Me",
    },
    {
      id: 2,
      tab: "Project",
    },
    {
      id: 3,
      tab: "Contact",
    },
    {
      id: 4,
      tab: "Resume",
    },
  ];

    return (
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-pink-50 fixed">
        <div>
          <h1 className="text-4xl font-signature ml-2 text-black"> GJ </h1>
        </div>
        <ul className="hidden md:flex">
          {tabs.map(({ id, tab }) => (
            <li
            key={id}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200"
            onClick={() => handlePageChange(tab)}>
              {tab}
            </li>
          ))}
        </ul>
        <div
        onClick={() => setNavi(!navi)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {navi ? <FaTimes size={30}/> : <FaBars size={30} />}
        </div>
        {navi && (
           <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-pink-200 to-pink-50 text-gray-500">
           {tabs.map(({ id, tab }) => (
               <li
               key={id}
               className="px-4 cursor-pointer py-6 text-4xl"
               onClick={() => handlePageChange(tab)}>
                 {tab}
               </li>
           ))}
           </ul>
        )}
      </div>
      
      
    );
}
  