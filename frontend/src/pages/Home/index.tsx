import React from "react";
import { Section, Seo, Dynamic } from "./../../components";
import { SolutionBusiness } from "../../components/Sections/SolutionBusiness";

const Home = () => {
  return (
    <>
      <Seo title="Home" metaDescription="ss" />
      <Section id="Home">
        <Dynamic
          subtitle="About Us"
          title="Dynamic Software Development Company"
          content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA. ZIrcona workers have been working on various large-scale & complex projects, always meeting clients’ expectations. The founders of Zircona have over 30 years of combined experience."
        />
        <SolutionBusiness />
      </Section>
    </>
  );
};

export default Home;
