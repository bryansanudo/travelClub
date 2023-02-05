import React, { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Outlet, Link, useLocation } from "react-router-dom";
import travelLogo from "@/assets/travelLogo.png";

const NavBar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "sanandres",
    },
    {
      id: 3,
      link: "cartagena",
    },
    {
      id: 4,
      link: "ejecafetero",
    },
    {
      id: 5,
      link: "santamarta",
    },
    {
      id: 6,
      link: "promotions",
    },
  ];
  const useScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);
  };

  return (
    <>
      {useScrollToTop()}
      <div className="fixed w-full h-24 bg-black text-white z-20">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <div>
            <img
              src={travelLogo}
              alt=""
              className="rounded-full object-cover w-16 h-16 shadow-lg shadow-thBlue"
            />
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link key={id} to={`/${link}`}>
                  <li className="p-4 uppercase duration-300 hover:text-thBlue cursor-pointer">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full bg-black text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={`/${link}`}
              onClick={() => setIsMenuShown(!isMenuShown)}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thBlue">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default NavBar;
