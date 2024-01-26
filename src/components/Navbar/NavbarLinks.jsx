import { links } from "../../constants/constants";
import { useScrollTo } from "../../hooks/useScrollTo";

export const NavbarLinks = () => {
  const scrollTo = useScrollTo;

  return (
    <div className="max-[400px]:hidden w-[310px] min-[480px]:w-[350px] min-[800px]:w-[400px] min-[1100px]:w-[450px] min-[1200px]:w-[500px] min-[1400px]:w-[600px] min-[2000px]:w-[650px]">
      <ul className="flex justify-between">
        {links.map((link) => (
          <li
            key={link.name.replace(" ", "-")}
            className="hover:border-b-[#3E8959] border-b-2 border-transparent hover:brightness-90 transition-all"
          >
            <button
              className="max-[480px]:text-[14px] max-[520px]:text-[15px] min-[2000px]:text-[20px]"
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
