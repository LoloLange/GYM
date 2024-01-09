import { PricingCard } from "./PricingCard";
import { fitnessPlans } from "../../constants/constants";

export const Pricing = () => {
  return (
    <section className="bg-[#ede4d0] py-[50px]" id="pricing">
      <p
        style={{ zIndex: "50" }}
        className="text-[50px] text-black font-[800] text-center"
      >
        PRICING
      </p>

      <div className="flex justify-evenly flex-wrap gap-[15px] mx-[2rem] min-[500px]:mx-3 pt-5">
        {fitnessPlans.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            services={plan.services}
            addBen={plan.additionalBenefits}
            img={plan.img}
            icon={<plan.icon />}
          />
        ))}
      </div>
    </section>
  );
};
