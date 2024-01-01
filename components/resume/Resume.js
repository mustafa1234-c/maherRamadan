import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume">
      <Title title="السيرة" subTitle="الذاتية" />
      <Education />
      <Title title="الخبرات" subTitle="المكتسبة" />
      <Skills />
    </section>
  );
};

export default Resume;
