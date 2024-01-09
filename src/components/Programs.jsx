import strength from '../assets/programs/strength.jpg'
import walking from '../assets/programs/walking.jpg'
import cycling from '../assets/programs/cycling.jpg'
import running from '../assets/programs/running.jpg'
import pilates from '../assets/programs/pilates.jpg'
import stretching from '../assets/programs/stretching.jpg'
import { ProgramCard } from './ProgramCard';
import { IoIosFitness } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { BiCycling } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import { TbStretching } from "react-icons/tb";
import { TbYoga } from "react-icons/tb";

export const Programs = () => {
    const programs = [
        { name: "STRENGTH", img: strength, description: "Sculpt and empower your body.", icon: <IoIosFitness /> },
        { name: "WALKING", img: walking, description: "Enjoyable walks for wellness.", icon: <FaWalking /> },
        { name: "CYCLING", img: cycling, description: "Exhilarating rides for fitness.", icon: <BiCycling /> },
        { name: "RUNNING", img: running, description: "Dynamic workouts for endurance.", icon: <FaRunning /> },
        { name: "PILATES", img: pilates, description: "Mindful movements for strength.", icon: <TbYoga /> },
        { name: "STRETCHING", img: stretching, description: "Enhance flexibility and relax.", icon: <TbStretching /> },
      ];

  return (
    <section className="bg-[#EEE9DD] py-[50px]">
      <p
        style={{ zIndex: "50" }}
        className="text-[50px] text-black font-[800] text-center"
      >
        PROGRAMS
      </p>

      <div className=" mx-[50px]">
        <div className='flex justify-evenly gap-8 pt-5 min-w-fit max-[1500px]:flex-wrap max-[1500px]:gap-x-[70px]'>
      {programs.map(pro => (
            <ProgramCard key={pro.name} name={pro.name} img={pro.img} description={pro.description} icon={pro.icon}/>
        ))}
        </div>
      </div>
    </section>
  );
};
