import { useState, useEffect } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    if (scrollY >= 10) setIsScroll(true);
    if (scrollY < 10) setIsScroll(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return isScroll;
};
