import React from "react";
import { ContactContent } from "./../../components";

import {
  Section,
  Seo,
  Container,
  SectionCenter,
  PageHeader,
} from "./../../components";

const Contact = () => {
  return (
    <Container>
      <Seo title="Contact" />
      <PageHeader />

      <SectionCenter>
        <Section>Office Address Office Email Office Phone</Section>
        <Section>
          <ContactContent
            subtitle="Contact"
            title="Get in Touch"
            content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA."
          />
          
        </Section>
      </SectionCenter>
    </Container>
  );
};

export default Contact;
