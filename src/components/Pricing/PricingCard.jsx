/* eslint-disable react/prop-types */
import { FaRegCircleCheck } from "react-icons/fa6";

export const PricingCard = ({ name, price, services, addBen, icon }) => {
  const checkPlan = () => {
    if (price > 50) {
      return (
        <small className="opacity-50">
          Everything included in previous plan plus...
        </small>
      );
    }
  };

  return (
    <div
      className="w-[400px] rounded-lg bg-[#EEE9DD] pb-[70px] shadow-xl relative"
      id="pricingCard"
    >
      <div className="text-[40px] min-[2000px]:text-[55px] pl-5 py-3 text-[#3E8959]">
        {icon}
      </div>
      <div className=" ml-5">
        <p className="font-[700] text-[25px] min-[2000px]:text-[30px] tracking-wide pt-2 text-[#3E8959] pr-3">
          {name}
        </p>
        <div className="flex items-baseline">
          <p className="text-[35px] min-[2000px]:text-[45px]">${price}</p>
          <small className="min-[2000px]:text-[15px]">/per month</small>
        </div>
      </div>

      <div className="ml-5 text-[#1c1c1c] font-normal pt-3 max-[400px]:mr-3 min-[2000px]:text-[20px] min-[823px]:max-[2000px]:h-[250px] h-fit pb-8">
        {checkPlan()}
        <p>Services:</p>
        <ul>
          {services.map((ser) => {
            return (
              <li className="flex items-center justify-start" key={ser}>
                <FaRegCircleCheck className="text-[18px] w-[20px] text-[#3E8959]" />
                <span className="mx-2">{ser}</span>
              </li>
            );
          })}
        </ul>
        <p className="pt-2">Additional:</p>
        <ul>
          {addBen.map((ben) => {
            return (
              <li className="flex items-center" key={ben}>
                <FaRegCircleCheck className="text-[18px]  min-w-fit text-[#3E8959]" />
                <span className="mx-2 ">{ben}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="rounded-lg px-5 mt-[40px] absolute w-full left-1/2 transform -translate-x-1/2 bottom-5">
        <button className="bg-[#3E8959] hover:brightness-90 text-white p-[10px] text-[16px] shadow-lg hover:-translate-y-[2px] transition-all mt-[25px] hover:text-[#3E8959] rounded-lg w-full">
          <span className="text-white">Get Started</span>
        </button>
      </div>
    </div>
  );
};
