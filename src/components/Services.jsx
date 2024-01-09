import { ServiceCard } from "./ServiceCard";
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { GiWeightScale } from "react-icons/gi";

export const Services = () => {
  const services = [
    {
      name: "LOSE EXTRA WEIGHT",
      description:
        "Transform your body with our specialized Weight Loss Program. Personalized workouts led by expert trainers will help you shed extra weight and achieve lasting results.",
      icon: <GiWeightScale />,
    },
    {
      name: "STRENGTH TRAINING",
      description:
        "Ignite your strength with our empowering Strength Training program. Expert-guided workouts are designed to build muscle, enhance endurance, and sculpt a powerful physique.",
      icon: <IoIosFitness />,
    },
    {
      name: "CARDIO WORKOUTS",
      description:
        "Elevate your fitness with our dynamic Cardio Workouts. From heart-pumping intervals to energizing sessions, our program enhances cardiovascular health, leaving you invigorated.",
      icon: <IoFitness />,
    },
  ];

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
            icon={ser.icon}
          />
        ))}
      </div>
    </section>
  );
};
