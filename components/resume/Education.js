import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="الخبرات" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="مسؤول الإعلام"
          subTitle="منظمة أيادي للإغاثة والتنمية."
          des="تصوير نشاط المؤسسة، إنشاء قصص النجاح للمشاريع التنموية والمستدامة، إنشاء الفيديوهات لنشرها على مواقع التواصل الاجتماعي، أرشفة المواد الإعلامية ورفعها على السحابة بشكل شهري"
        />
        <ResumeCard
          badge="2017 - 2018"
          title="مساعد مسؤول الإعلام"
          subTitle="مركز وتد للتدريب والتنمية."
          des="إنشاء الفيديوهات وإرسالها إلى المدير عبر البريد الالكتروني، تصميم البوسترات والمطبوعات، أرشفة المواد الإعلامية ورفعها على السحابة بشكل شهري، قدمت دورة موشن جرافيك للمبتدئين في برنامج الأفتر أفكت"
        />
        <ResumeCard
          badge="2015 - 2017"
          title="مسؤول الإعلام"
          subTitle="جمعية شباك أمل."
          des="تصوير نشاط الجمعية، إنشاء الفيديوهات وارسالها إلى المدير عبر البريد الالكتروني، أرشفة المواد الإعلامية ورفعها على السحابة بشكل شهري، ساهمت في الإشراف على مطبخ رمضاني خيري"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="التعليم" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2012 - 2021"
          title="جامعة كولورادو - بولدر الأمريكية"
          subTitle="أونلاين"
          des="متخرج وحاصل على الشهادة من موقع  coursera.org"
        />
        <ResumeCard
          badge="2020 - متوقف"
          title="كلية ميكاترونيكس"
          subTitle="جامعة حلب الحرة - سنة أولى"
          des=""
        />
        <ResumeCard
          badge="2012"
          title="هندسة ديكور"
          subTitle="المعهد الصناعي الثاني"
          des="لم أتخرج بسبب الحرب التي اندلعت في سوريا"
        />
      </div>
    </div>
  );
};

export default Education;
