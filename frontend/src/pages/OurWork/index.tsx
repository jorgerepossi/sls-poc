import React from "react";
//import { Box } from "@material-ui/core";
import {
  Container,
  Seo,
  Section,
  SectionCenter,
  PageHeader,
  OurWorkContent,
} from "../../components/";

const OurWork = () => {
  return (
    <>
      <Container>
        <Seo title="Our Work" metaDescription="ss" />
        <PageHeader />
        <Section>
          <SectionCenter>
            <OurWorkContent
              subtitle="our portfolio"
              title="Our Latest Works"
              content="We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs."
            />
          </SectionCenter>
        </Section>
      </Container>
    </>
  );
};

export default OurWork;
