import { useScroll } from "../hooks/useScroll";

export const Navbar = () => {
  const isScroll = useScroll();

  const links = [
    { name: "Home" },
    { name: "Services" },
    { name: "Programs" },
    { name: "Pricing" },
    { name: "Contact" },
  ];

  return (
    <header
      onScrollCapture={() => console.log("scrolled!")}
      className={`sticky top-0 bg-[#EEE9DD] max-[700px]:shadow-lg ${
        isScroll ? "shadow-lg" : ""
      }`}
      style={{zIndex: 100}}
    >
      <div className="h-[85px] flex items-center justify-between min-[400px]:justify-center min-[530px]:justify-between px-5 min-[700px]:justify-around w-[100%]">
        <div id="navbar-logo">
          <p className="font-[800] text-[30px] select-none max-[400px]:block max-[530px]:hidden">
            <span className="text-[#3E8959]">G</span>YM
          </p>
        </div>

        <div className="max-[400px]:hidden min-[400px]:w-[375px] min-[800px]:w-[400px] min-[1100px]:w-[450px] min-[1200px]:w-[500px] min-[1400px]:w-[600px]">
          <ul className="flex justify-between">
            {links.map((link) => (
              <li
                key={link.name.replace(" ", "-")}
                className="hover:border-b-[#3E8959] border-b-2 border-transparent hover:brightness-90 transition-all"
              >
                <a href={"#" + link.name.replace(" ", "-").toLocaleLowerCase()}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-[400px]:block max-[700px]:hidden">
          <button className="bg-black text-white p-[10px] text-[16px] shadow-lg hover:-translate-y-[2px] transition-all w-[150px]">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};
