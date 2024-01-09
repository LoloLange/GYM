/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import { useScroll } from "../hooks/useScroll";
import { links } from "../constants/constants";
import { useScrollTo } from "../hooks/useScrollTo";

export const navbarLinks = () => {
  const scrollTo = useScrollTo;

  return (
    <div className="max-[400px]:hidden w-[310px] min-[480px]:w-[350px] min-[800px]:w-[400px] min-[1100px]:w-[450px] min-[1200px]:w-[500px] min-[1400px]:w-[600px] min-[2000px]:w-[650px]">
      <ul className="flex justify-between">
        {links.map((link) => (
          <li
            key={link.name.replace(" ", "-")}
            className="hover:border-b-[#3E8959] border-b-2 border-transparent hover:brightness-90 transition-all"
          >
            <button className="max-[480px]:text-[14px] max-[520px]:text-[15px] min-[2000px]:text-[20px]"
              onClick={() => scrollTo({ sectionName: link.name.toLowerCase() })}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Navbar = () => {
  const isScroll = useScroll();
  const scrollTo = useScrollTo;
  return (
    <header
      className={`sticky top-0 bg-[#EEE9DD] max-[700px]:shadow-lg ${
        isScroll ? "shadow-lg" : ""
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="h-[85px] flex items-center justify-between min-[400px]:justify-between min-[530px]:justify-between px-3 min-[430px]:px-5 min-[700px]:justify-around w-[100%]">
        <div id="navbar-logo" onClick={() => scrollTo({ sectionName: "home" })}>
          <p className="font-[800] text-[23px] min-[430px]:text-[25px] min-[500px]:text-[30px] select-none">
            <span className="text-[#3E8959]">G</span>YM
          </p>
        </div>

        {navbarLinks()}

        <div className="max-[400px]:block max-[700px]:hidden">
          <button
            className="bg-black text-white p-[10px] text-[16px] min-[2000px]:text-[20px] shadow-lg hover:-translate-y-[2px] transition-all w-[150px] min-[2000px]:w-[200px]"
            onClick={() => scrollTo({ sectionName: "pricing" })}
          >
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};
