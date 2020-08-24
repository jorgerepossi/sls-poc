import React from "react";
import { Container, SectionCenter, Section, Seo, PageHeader } from "./../../components";

const About: React.FC = (): JSX.Element => {
  return (
    <Container className="about">
      <Seo title="About Us" metaDescription="" />
      <PageHeader />
      <SectionCenter>
        <Section>About Us</Section>
      </SectionCenter>
    </Container>
  );
};

export default About;
