/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-refresh/only-export-components */
import { useScroll } from "../../hooks/useScroll";
import { useScrollTo } from "../../hooks/useScrollTo";
import { useEffect, useState } from "react";
import { MobileNavbar } from "./MobileNavbar";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  const isScroll = useScroll();
  const scrollTo = useScrollTo;

  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (width <= 700) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <header
      className={`sticky top-0 bg-[#EEE9DD] max-[700px]:shadow-lg ${
        isScroll ? "shadow-lg" : ""
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="h-[85px] flex items-center justify-between min-[400px]:justify-between min-[530px]:justify-between px-8 min-[700px]:justify-around w-[100%]">
        {mobile && <MobileNavbar />}
        <div id="navbar-logo" onClick={() => scrollTo({ sectionName: "home" })}>
          <p className="font-[800] text-[30px] select-none">
            <span className="text-[#3E8959]">G</span>YM
          </p>
        </div>
        {!mobile && <NavbarLinks />}
        
        <div className="max-[700px]:hidden">
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
