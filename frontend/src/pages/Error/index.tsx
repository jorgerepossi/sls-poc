import React from "react";
import {
  Container,
  SectionCenter,
  Section,
  PageHeader,
} from "../../components";
import { Heading } from "../../components";
import { Typography } from "@material-ui/core";

function Error({ location }) {
  return (
    <>
      <PageHeader title="Error 404" />
      <Container>
        <Section>
          <SectionCenter>
            <Typography>Error Page</Typography>
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
