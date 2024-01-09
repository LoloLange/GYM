import { ProgramCard } from "./ProgramCard";
import { programs } from "../../constants/constants";

export const Programs = () => {
  return (
    <section className="bg-[#EEE9DD] py-[50px]">
      <p
        style={{ zIndex: "50" }}
        className="text-[50px] text-black font-[800] text-center"
      >
        PROGRAMS
      </p>

      <div className=" mx-[50px]">
        <div className="flex justify-evenly gap-8 pt-5 min-w-fit max-[1500px]:flex-wrap max-[1500px]:gap-x-[70px]">
          {programs.map((pro) => (
            <ProgramCard
              key={pro.name}
              name={pro.name}
              img={pro.img}
              description={pro.description}
              icon={<pro.icon />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
