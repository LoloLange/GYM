import { useState } from "react";
import { links } from "../../constants/constants";
import { useScrollTo } from "../../hooks/useScrollTo";

export const MobileNavbar = () => {
  const scrollTo = useScrollTo;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div className="row cf">
        <div className="three col">
          <div
            className={`hamburger ${isClicked ? "is-active" : ""}`}
            id="hamburger-1"
            onClick={() => setIsClicked(!isClicked)}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      {isClicked && (
        <div className="w-[100%] h-[100vh] bg-black absolute top-0 left-0 overflow-y-hidden flex justify-center text-center">
          <ul className="flex justify-center flex-col text-white">
            {links.map((link) => (
              <li
                key={link.name.replace(" ", "-")}
                className="hover:text-[#3E8959] hover:brightness-90 transition-all"
                onClick={() => setIsClicked(false)}
              >
                <button
                  className="text-[25px] mb-8"
                  onClick={() =>
                    scrollTo({ sectionName: link.name.toLowerCase() })
                  }
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
