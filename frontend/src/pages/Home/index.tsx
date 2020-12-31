import React from "react";
import { Section, Seo, HomeContent } from "./../../components";

const Home = () => {
  return (
    <>
      <Seo title="Home" metaDescription="ss" />
      <Section id="Home">
        <HomeContent />
      </Section>
    </>
  );
};

export default Home;
