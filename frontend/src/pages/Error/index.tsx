import React from "react";
import {
  Container,
  SectionCenter,
  Section,
  PageHeader,
  Seo,
} from "../../components";
import { Heading } from "../../components";
import ErrorPage from "../../assets/images/404.png";

function Error({ location }) {
  return (
    <>
     <Seo title="Page not found" />
      <PageHeader title="Error 404" />
      <Container>
        
        <Section>
          <SectionCenter
            Display="flex"
            JustifyContent="center"
            AlignContent="center"
            AlignItems="center"
          >
            <img src={ErrorPage} alt="" />
          </SectionCenter>
        </Section>
        <SectionCenter>
          <Section
            Display="flex"
            JustifyContent="center"
            AlignContent="center"
            AlignItems="center"
          >
            <Heading
              subtitle=""
              title="Ooops! Page Not Found"
              content="The page you are looking for was moved, removed, renamed or never
            existed."
              JustifyContent="center"
              AlignContent="center"
              AlignItems="center"
            />
          </Section>
        </SectionCenter>
      </Container>
    </>
  );
}

export default Error;
