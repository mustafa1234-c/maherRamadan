import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-700 border-b-[1px] border-b-zinc-700 border-t-[1px] border-t-zinc-700 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">مرحباً أنا ماهر رمضان</h2>
          <p className="text-base leading-6 ">
        إعلامي لدي خبرة في هذا المجال أكثر من عشر سنوات مصور ومونتير ومصمم أعمل على تطوير نفسي دائماً بسبب حبي لهذا المجال الرائع الذي من خلاله استطيع أن أوصل رسالة من دون كلام  
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 border-r-[1px] border-r-zinc-700 border-b-[1px] border-b-zinc-700 border-t-[1px] border-t-zinc-700">
        <ul className="flex flex-col gap-1 ">
          <li className="aboutRightLi text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            <span className="aboutRightLiSpan">العمر:</span>
            30
          </li>
          <li className="aboutRightLi text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <span className="aboutRightLiSpan">جنسيتي:</span>
            سوريا
          </li>
          <li className="aboutRightLi text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <span className="aboutRightLiSpan">العمل الحر:</span>
            متاح
          </li>
          <li className="aboutRightLi text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <span className="aboutRightLiSpan">العنوان:</span>
            مدينة إعزاز          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
