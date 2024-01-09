/* eslint-disable react/prop-types */
import { FaCircleArrowRight } from "react-icons/fa6";
export const ServiceCard = ({ name, description, icon }) => {
  return (
    <div
      id="card"
      className="w-[400px] mt-[10px] cursor-pointer p-[30px] xl:hover:shadow-2xl rounded-lg xl:hover:text-[#3E8959] xl:hover:bg-[#EEE9DD] transition-all text-center"
    >
      <div className="text-[50px] flex justify-center text- pb-5 text-center">
        <span className="bg-[#3E8959] p-5 rounded-full text-white ">
          {icon}
        </span>
      </div>
      <p className="font-bold text-[28px] text-center tracking-wide">{name}</p>
      <p className="text-black pt-2 h-fit">{description}</p>
      <div className="flex justify-center">
        <button className="bg-black text-white hover:text-[#3E8959] p-[15px] text-[16px] shadow-lg hover:-translate-y-[2px] transition-all w-[150px] mt-[25px] flex justify-center items-center">
          Read More
          <FaCircleArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};
