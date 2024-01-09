import { navbarLinks } from "./Navbar";
import { contactItems, socialLinks } from "../constants/constants";

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

      <div className="flex flex-col min-[2000px]:text-[18px] gap-3">
        {contactItems.map((item) => (
          <div key={item.label} className="flex items-center">
            {<item.icon />}
            <p className="pl-2">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly items-center text-[30px] min-[2000px]:text-[40px] gap-x-5">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-[#3E8959] transition-all"
          >
            {<link.icon />}
          </a>
        ))}
      </div>
    </footer>
  );
};
