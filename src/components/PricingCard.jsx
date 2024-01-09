/* eslint-disable react/prop-types */
import { FaRegCircleCheck } from "react-icons/fa6";

export const PricingCard = ({ name, price, services, addBen, icon }) => {
  const checkPlan = () => {
    if (price > 50) {
      return <small className="opacity-50">Everything included in previous plan plus...</small>;
    }
  };

  return (
    <div className="w-[400px] rounded-lg bg-[#EEE9DD] pb-5 shadow-xl" id="pricingCard">
      {/* <img src={img} alt={name + " picture"} className="w-[400px] h-[200px] object-cover object-top rounded-t-lg relative" /> */}
      <div className="text-[40px] pl-5 py-3 text-[#3E8959]">{icon}</div>
      <div className=" ml-5">
        <p className="font-[700] text-[25px] tracking-wide pt-2 text-[#3E8959]">
          {name}
        </p>
        <div className="flex items-baseline">
          <p className="text-[35px]">${price}</p>
          <small className="">/per month</small>
        </div>
      </div>

      <div className="ml-5 text-[#1c1c1c] font-normal pt-3 min-[823px]:h-[250px]">
        {checkPlan()}
        <p>Services:</p>
        <ul>
          {services.map((ser) => {
            return (
              <li className="flex items-center" key={ser}>
                <FaRegCircleCheck className="mx-2 text-[18px] w-[20px] text-[#3E8959]" />
                {ser}
              </li>
            );
          })}
        </ul>
        <p className="pt-2">Additional:</p>
        <ul>
          {addBen.map((ben) => {
            return (
              <li className="flex items-center" key={ben}>
                <FaRegCircleCheck className="mx-2 text-[18px] w-[20px] text-[#3E8959]" />
                {ben}
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" w-full rounded-lg px-5">
        <button className="bg-[#3E8959] hover:brightness-90 text-white p-[10px] text-[16px] shadow-lg hover:-translate-y-[2px] transition-all w-[150px] mt-[25px] flex items-center justify-center hover:text-[#3E8959] w-full rounded-lg">
          <span className="text-white">Get Started</span>
        </button>
      </div>
    </div>
  );
};
