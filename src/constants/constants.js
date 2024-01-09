import { IoIosFitness } from "react-icons/io";
import { IoFitness } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";

import strength from "../assets/programs/strength.jpg";
import walking from "../assets/programs/walking.jpg";
import cycling from "../assets/programs/cycling.jpg";
import running from "../assets/programs/running.jpg";
import pilates from "../assets/programs/pilates.jpg";
import stretching from "../assets/programs/stretching.jpg";
import { FaWalking } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { TbStretching } from "react-icons/tb";
import { TbYoga } from "react-icons/tb";

import { GiWeightScale } from "react-icons/gi";

export const activities = [
  { name: "Strength" },
  { name: "Walking" },
  { name: "Cycling" },
  { name: "Running" },
  { name: "Pilates" },
  { name: "Stretching" },
];

export const links = [
  { name: "Home" },
  { name: "Services" },
  { name: "Programs" },
  { name: "Pricing" },
  { name: "Contact" },
];

export const fitnessPlans = [
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
    icon: IoIosFitness,
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
    icon: IoFitness,
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
    icon: FaArrowTrendUp,
  },
];

export const programs = [
  {
    name: "STRENGTH",
    img: strength,
    description: "Sculpt and empower your body.",
    icon: IoIosFitness,
  },
  {
    name: "WALKING",
    img: walking,
    description: "Enjoyable walks for wellness.",
    icon: FaWalking,
  },
  {
    name: "CYCLING",
    img: cycling,
    description: "Exhilarating rides for fitness.",
    icon: BiCycling,
  },
  {
    name: "RUNNING",
    img: running,
    description: "Dynamic workouts for endurance.",
    icon: FaRunning,
  },
  {
    name: "PILATES",
    img: pilates,
    description: "Mindful movements for strength.",
    icon: TbYoga,
  },
  {
    name: "STRETCHING",
    img: stretching,
    description: "Enhance flexibility and relax.",
    icon: TbStretching,
  },
];

export const services = [
  {
    name: "LOSE EXTRA WEIGHT",
    description:
      "Transform your body with our specialized Weight Loss Program. Personalized workouts led by expert trainers will help you shed extra weight and achieve lasting results.",
    icon: GiWeightScale,
  },
  {
    name: "STRENGTH TRAINING",
    description:
      "Ignite your strength with our empowering Strength Training program. Expert-guided workouts are designed to build muscle, enhance endurance, and sculpt a powerful physique.",
    icon: IoIosFitness,
  },
  {
    name: "CARDIO WORKOUTS",
    description:
      "Elevate your fitness with our dynamic Cardio Workouts. From heart-pumping intervals to energizing sessions, our program enhances cardiovascular health, leaving you invigorated.",
    icon: IoFitness,
  },
];
