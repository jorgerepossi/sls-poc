import React from "react";
import { ContactContent } from "./../../components";
import "./Contact.scss";
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

      <SectionCenter className="containerWrapper">
        <Box className="widget  ">
          <Section className="widgetWrapper col-33">
            <Box className="widgetWrap">
              <WidgetList data={InfoData} />
            </Box>
          </Section>
          <Section className="formWrapper col-66">
            <Box className="formWrap">
              <ContactContent
                subtitle="Contact"
                title="Get in Touch"
                content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA."
              />
            </Box>
          </Section>
        </Box>
      </SectionCenter>
    </Container>
  );
};

export default Contact;
