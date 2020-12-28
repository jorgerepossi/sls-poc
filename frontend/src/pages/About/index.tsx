import React from "react";
import { Container, Seo, PageHeader, AboutContent } from "./../../components";

interface Props extends DynamicType {}
const About: React.FC<Props> = (): JSX.Element => {
  return (
    <Container className="about">
      <Seo title="About Us" metaDescription="" />
      <PageHeader title="About Us" />
      <AboutContent />
    </Container>
  );
};

export default About;
