import React, { useState } from "react";

import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";

const SideNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } h-screen w-64 bg-slate-700 relative`}
        >
          <h1
            className={`${!open && "scale-0"}

     text-white font-serif text-3xl p-5 pb-2`}
          >
            TODO{" "}
          </h1>

          <i
            className="fa fa-bars text-white absolute text-xl right-5 top-5"
            aria-hidden="true"
            onClick={() => setOpen(!open)}
          ></i>

          <ul>
            <li className=" text-white text-xl font-serif m-2 flex cursor-pointer hover:bg-slate-600 p-2 gap-3">
              <span className="text-white text-2xl p-1 ml-3">
                <AiOutlineHome />
              </span>

              <Link to="/" className={`${!open && "hidden"}`}>
                Home
              </Link>
            </li>

            <li className="flex text-white text-xl cursor-pointer hover:bg-slate-600 p-2 gap-3">
              <span className=" text-white text-2xl p-1 ml-3">
                <AiOutlineHome />
              </span>

              <Link to="/about" className={`${!open && "hidden"}`}>
                About
              </Link>
            </li>

            <li className="flex text-white text-xl cursor-pointer hover:bg-slate-600 p-2 gap-3 ">
              <span className=" p-1 ml-3 text-2xl mr-3">
                <AiOutlineHome />
              </span>

              <Link to="/contact" className={`${!open && "hidden"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
