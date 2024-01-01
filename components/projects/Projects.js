import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="مشاريع" subTitle="حديثة" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="اسم المشروع"
            category="موشن جرافيك"
            image={workImgThree}
          />
          <ProjectsCard
            title="اسم المشروع"
            category="موشن جرافيك"
            image={workImgOne}
          />
          <ProjectsCard
            title="اسم المشروع"
            category="لوغو"
            image={workImgTwo}
          />
          <ProjectsCard
            title="اسم المشروع"
            category="سوشيل ميديا"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="اسم المشروع"
            category="سوشيل ميديا"
            image={workImgFour}
          />
          <ProjectsCard
            title="اسم المشروع"
            category="مونتاج"
            image={workImgSix}
          />
          <ProjectsCard
            title="اسم المشروع"
            category="هوية بصرية"
            image={workImgEight}
          />
          <ProjectsCard
            title="اسم المشروع"
            category="لوغو"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
