import React from "react";
import {
  Container,
  Seo,
  Section,
  SectionCenter,
  PageHeader,
} from "../../components/";

const Team = () => {
  return (
    <>
      <Container>
      <Seo title="Team" metaDescription="ss" />
      <PageHeader title="Our Team" />
        <Section>
          <SectionCenter>team</SectionCenter>
        </Section>
      </Container>
    </>
  );
};

export default Team;
