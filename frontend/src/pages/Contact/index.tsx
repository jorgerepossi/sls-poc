import React from "react";
import { Section, Seo, Container, SectionCenter, PageHeader } from "./../../components";

const Contact = () => {
  return (
    <Container>
      <Seo title="Contact" />
      <PageHeader />
      <SectionCenter>
        <Section id="Contact">Hi From contact</Section>
      </SectionCenter>
    </Container>
  );
};

export default Contact;
