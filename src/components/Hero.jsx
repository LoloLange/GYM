import heroBg from "../assets/hero-background.png";
import dumbells from "../assets/dumbells.png";
import { FaArrowTrendUp } from "react-icons/fa6";

export const Hero = () => {
  return (
    <nav id="hero" className="max-[1150px]:h-screen min-[1150px]:mb-[300px]">
      <div className="absolute right-[25px] min-[1230px]:right-[50px] min-[1550px]:right-[100px] min-[1650px]:right-[175px] max-[1150px]:hidden">
        <img
          src={heroBg}
          alt="Young man with dumbells"
          title="Young man with dumbells"
          className="w-[600px] relative select-none"
          style={{ zIndex: 1 }}
        />
        <span className="bg-[#3E8959] w-[500px] h-[800px] absolute top-[55px] left-[100px] rounded-t-[9999px]"></span>
      </div>

      <div className="flex h-[600px] flex-col justify-center max-[600px]:ml-[30px] min-[600px]:ml-[50px] min-[1550px]:ml-[100px]">
        <p
          style={{ zIndex: "50" }}
          className="text-[35px] min-[470px]:text-[40px] min-[630px]:text-[45px] min-[775px]:text-[55px] min-[900px]:text-[65px] min-[1150px]:text-[45px] min-[1200px]:text-[50px] min-[1450px]:text-[70px] text-black font-[800]"
        >
          TRANSFORM YOUR BODY <br />
          <div className="flex">
            <span className="text-[#3E8959] max-[570px]:mb-2">ONCE AND FOR ALL </span>
            <img
              src={dumbells}
              alt="dumbells icon"
              className="max-[570px]:hidden min-[570px]:w-[70px] min-[630px]:w-[90px] min-[900px]:w-[100px] min-[1150px]:w-[75px] min-[1200px]:w-[85px] min-[1450px]:w-[100px] min-[1450px]:mt-2 select-none ml-5"
            />
          </div>
        </p>

        <p className="w-[300px] min-[400px]:w-[350px] max-[470px]:text-[14px] min-[470px]:w-[400px] min-[570px]:w-[450px] min-[630px]:w-[550px] min-[775px]:w-[700px] min-[1150px]:w-[500px] min-[1200px]:w-[600px] min-[1300px]:w-[700px] min-[570px]:text-[17px]">
          With the widest range of cutting-edge fitness equipment and
          personalized training programs, this is your premier destination for
          achieving peak wellness. Join us and experience a fitness journey
          tailored to your goals, supported by a vibrant community dedicated to
          your success. Elevate your fitness experience with us.
        </p>

        <button className="bg-black text-white p-[10px] text-[16px] shadow-lg hover:-translate-y-[2px] transition-all w-[150px] mt-[25px] flex items-center justify-center hover:text-[#3E8959]">
          <span className="text-white">Get Started</span>
          <FaArrowTrendUp className="ml-2" />
        </button>
        {/* <div className="absolute top-[150px] left-[50px] mt-[500px] w-[60%]">
      <Activities />
      </div> */}
      </div>
    </nav>
  );
};
