import React from "react";

const FunFactCard = ({ icon, des }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center gap-2 py-8 border-r-[1px] border-r-zinc-700 border-b-[1px] border-b-zinc-700 border-t-[1px] border-t-zinc-700">
        <span className="text-2xl text-designColor">{icon}</span>
        <p className="text-base w-32 h-10 text-center text-gray-300 hover:text-white duration-200">
          {des}
        </p>
      </div>
    </div>
  );
};

export default FunFactCard;
