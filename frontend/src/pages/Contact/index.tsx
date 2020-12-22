import React from "react";
import { ContactContent } from "./../../components";
import { ContantWrapper } from "./Contact.styled";
import {
  Section,
  Seo,
  Container,
  SectionCenter,
  PageHeader,
} from "./../../components";
import Box from "@material-ui/core/Box";
import { InfoData } from "./../../components/NavLink/Data";
import { WidgetList } from "./../../components/List";
import "./../../components/styles/Icon.css";

const Contact = () => {
  return (
    <Container>
      <Seo title="Contact" />
      <PageHeader />

      <SectionCenter>
        <ContantWrapper>
          <Section className="widgetWrapper col-33">
            <Box className="widgetWrap">
              <WidgetList data={InfoData} />
            </Box>
          </Section>
          <Section className="col-66">
            <ContactContent
              subtitle="Contact"
              title="Get in Touch"
              content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA."
            />
          </Section>
        </ContantWrapper>
      </SectionCenter>
    </Container>
  );
};

export default Contact;
