/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
      if (scrollY > 200) setIsVisible(true);
      else setIsVisible(false);
    });
  }, [scrollY]);

  return (
    isVisible ? (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fade-in fixed bottom-10 min-[2000px]:bottom-14 right-10 min-[2000px]:right-14 text-[22px] min-[2000px]:text-[32px] text-[#FFFAFA] bg-[#285340] p-[10px] min-[2000px]:p-[15px] rounded-md shadow-2xl transition-all hover:-translate-y-[2px] hover:brightness-90"
      ><FaArrowUp/></button>
    ) : (
        <button
        className="fade-out fixed right-10 min-[2000px]:right-14 text-[22px] min-[2000px]:text-[32px] text-[#FFFAFA] bg-[#285340] p-[10px] min-[2000px]:p-[15px] rounded-md shadow-2xl transition-all hover:-translate-y-[2px] hover:brightness-90"
      ><FaArrowUp/></button>
    )
  );
};
