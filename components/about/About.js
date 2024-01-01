import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="نبذة" subTitle="عني" />
      <AboutMe />
      <Title title="خدمــاتي" subTitle="" />
      <MyServices />
      <Title title="بعض" subTitle="المعلومات" />
      <FunFact />
    </section>
  );
};

export default About;
