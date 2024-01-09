/* eslint-disable react/prop-types */

export const ProgramCard = ({ name, img, description, icon }) => {
  return (
    <div className="overflow-hidden rounded-md">
      <img
        src={img}
        alt={img + " program"}
        className="w-[300px] h-[300px] object-cover object-top rounded-md shadow-xl"
      />
      <div className="text-[30px] flex items-center">
        <p className="font-[600] text-[30px] tracking-wide pt-2">{name}</p>
        <span className=" text-[#3E8959] ml-2">
          {icon}
        </span>
      </div>
      <p className="text-black">{description}</p>
    </div>
  );
};
