import React from "react";

const ServicesCard = ({ icons, title, subTitle }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 border-r-[1px] border-r-zinc-700 border-b-[1px] border-b-zinc-700 border-t-[1px] border-t-zinc-700">
      <span className="text-4xl text-designColor mb-2">{icons}</span>
      <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
      <p className="text-base text-center text-zinc-400 px-6">{subTitle}</p>
    </div>
  );
};

export default ServicesCard;
