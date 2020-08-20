import React from "react";
import { Container, SectionCenter, Section, Seo } from "./../../components";

const About: React.FC = (): JSX.Element => {
  return (
    <Container className="about">
      <Seo title="About Us" metaDescription="" />
      <SectionCenter>
        <Section>About Us</Section>
      </SectionCenter>
    </Container>
  );
};

export default About;
