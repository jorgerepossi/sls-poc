import React from "react";
import { Box } from "@material-ui/core";
import {
  Container,
  Seo,
  Section,
  SectionCenter,
  PageHeader,
} from "../../components/";

const OurWork = () => {
  return (
    <>
      <Container>
        <Seo title="Our Work" metaDescription="ss" />
        <PageHeader />
        <Section>
          <SectionCenter>OurWork</SectionCenter>
        </Section>
      </Container>
    </>
  );
};

export default OurWork;
