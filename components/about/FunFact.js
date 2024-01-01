import React from "react";
import { TfiBarChart } from "react-icons/tfi";
import { MdApartment } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { MdAutoAwesomeMotion } from "react-icons/md";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<TfiBarChart />} des="أكثر من 10 سنوات من الخبرة" />
      <FunFactCard icon={<MdApartment />} des="مؤسس شركة سينسور ديزاين" />
      <FunFactCard icon={<FaPaintBrush />} des="تنفيذ أكثر من 100 تصميم إحترافي" />
      <FunFactCard icon={<MdAutoAwesomeMotion />} des="تنفيذ أكثر من 50 مشروع موشن جرافيك" />
    </div>
  );
};

export default FunFact;
