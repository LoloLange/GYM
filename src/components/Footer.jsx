import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { navbarLinks } from "./Navbar";

export const Footer = () => {
  return (
    <footer className="bg-[#181A1B] py-[50px] text-white flex justify-around items-center flex-wrap gap-x-[15px] gap-y-[20px] px-5">
      <div>
        <div id="navbar-logo">
          <p className="font-[800] text-[30px] select-none text-center">
            <span className="text-[#3E8959]">G</span>YM
          </p>
          <p>Copyright © 2024</p>
        </div>
      </div>

      {navbarLinks()}

      <div className="flex flex-col text-[30px] gap-x-5">
        <div className="flex items-center text-[17px]">
          <FaHouse />
          <p className="pl-2">Miami 1234, US</p>
        </div>

        <div className="flex items-center text-[17px]">
          <IoIosMail />
          <p className="pl-2">info@example.com</p>
        </div>

        <div className="flex items-center text-[17px]">
          <FaPhone />
          <p className="pl-2">+1 2345 6789</p>
        </div>
      </div>

      <div className="flex justify-evenly items-center text-[30px] gap-x-5">
        <a href="" className="hover:text-[#3E8959] transition-all">
          <FaInstagram />
        </a>
        <a href="" className="hover:text-[#3E8959] transition-all">
          <FaXTwitter />
        </a>
        <a href="" className="hover:text-[#3E8959] transition-all">
          <FaYoutube />
        </a>
        <a
          href="https://github.com/lololange"
          className="hover:text-[#3E8959] transition-all"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};
