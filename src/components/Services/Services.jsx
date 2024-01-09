import { ServiceCard } from "./ServiceCard";
import { services } from "../../constants/constants";

export const Services = () => {
  return (
    <section className="bg-[#ede4d0] py-[50px]">
      <p
        style={{ zIndex: "50" }}
        className="text-[50px] text-black font-[800] text-center"
      >
        SERVICES
      </p>

      <div className="flex justify-evenly flex-wrap">
        {services.map((ser) => (
          <ServiceCard
            key={ser.name}
            name={ser.name}
            description={ser.description}
            icon={<ser.icon />}
          />
        ))}
      </div>
    </section>
  );
};
