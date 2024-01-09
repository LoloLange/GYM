// import './activities.css'
import { activities } from "../constants/constants";

const checkAct = (act) => {
  if (act.name === "Stretching") return "";
  else return "●";
};

export const Activities = () => {
  return (
    <section className="slider mx-[25px]">
      <div className="slide-track flex bg-[#131313] w-full h-[75px] items-center rounded-[30px] justify-evenly shadow-2xl pl-6">
        {activities.map((act) => (
          <div key={act.name} className="slide text-[25px] text-[#EEE9DD]">
            <p>
              {act.name}{" "}
              <span className="text-[#3E8959] px-4">{checkAct(act)}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
