import React from "react";
import { AboutUs } from "./AboutUs/AboutUs";
import { AboutView } from "./AboutView/AboutView";
import { OurPhilosophy } from "./OurPhilosophy/OurPhilosophy";

interface Props {}
export const AboutContent: React.FC<Props> = () => {
  return (
    <>
      <AboutUs
        subtitle="About Us"
        title="We are Going Global"
        content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA. ZIrcona workers have been working on various large-scale & complex projects, always meeting clients’ expectations. The founders of Zircona have over 30 years of combined experience."
      />

      <OurPhilosophy
        subtitle="Philosophy"
        title="In What We Believe"
        content="igi "
      />

      <AboutView />
    </>
  );
};
