import React from "react";
import {
  Container,
  Seo,
  PageHeader,
  OurTeam,
} from "../../components/";

const Team = () => {
  return (
    <>
      <Container>
        <Seo title="Our Team" metaDescription="ss" />
        <PageHeader />
        <OurTeam
          subtitle="who we are"
          title="We Have Only Best Skilled Professional Team"
          content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA. ZIrcona workers have been working on various large-scale & complex projects, always meeting clients’ expectations."
        />
      </Container>
    </>
  );
};

export default Team;
