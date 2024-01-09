import { PricingCard } from "./PricingCard";
import essentialPlan from '../assets/plans/essential-plan.jpg'
import cardioPlan from '../assets/plans/cardio-plan.jpg'
import premiumPlan from '../assets/plans/premium-plan.jpg'
import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

const fitnessPlans = [
  {
    name: "Essential Fitness",
    price: 39.99,
    services: [
      "Strength and cardio access",
      "Guided weekly walks",
      "Basic Pilates and stretching",
    ],
    additionalBenefits: [
      "Quarterly fitness assessments",
      "Discounts on specialized programs",
      "Monthly fitness newsletter",
    ],
    img: essentialPlan,
    icon: <IoIosFitness />
  },
  {
    name: "Cardio Boost",
    price: 55,
    services: [
      "Unlimited dynamic cardio",
      "Running and cycling programs",
      "Occasional HIIT sessions",
    ],
    additionalBenefits: [
      "Bi-monthly fitness challenges",
      "Community-led walking and running groups",
      "Exclusive gear discounts",
    ],
    img: cardioPlan,
    icon: <IoFitness />
  },
  {
    name: "Premium Transformation",
    price: 99.99,
    services: [
      "Unlimited access to all programs",
      "Personalized strength training",
      "Tailored cardio and Pilates",
    ],
    additionalBenefits: [
      "Nutritional guidance and meal planning",
      "Monthly progress assessments",
      "Access to exclusive workshops",
    ],
    img: premiumPlan,
    icon: <FaArrowTrendUp />
  },
];

export const Pricing = () => {
  return (
    <section className="bg-[#ede4d0] py-[50px]">
      <p
        style={{ zIndex: "50" }}
        className="text-[50px] text-black font-[800] text-center"
      >
        PRICING
      </p>

      <div className="flex justify-evenly flex-wrap gap-y-[15px] mx-3 pt-5">
        {fitnessPlans.map((plan) => (
          <PricingCard key={plan.name} name={plan.name} price={plan.price} services={plan.services} addBen={plan.additionalBenefits} img={plan.img} icon={plan.icon}/>
        ))}
      </div>
    </section>
  );
};
