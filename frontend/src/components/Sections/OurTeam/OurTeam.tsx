import React from "react";
import { Container } from "../../index";
import { TextBoxesLight } from "../TextBoxes";
import { DataTextFlexible } from "../AboutContent/DataText";
import { Team } from "./DedicatedTeam/DedicatedTeam";
import { ListTeam } from "./ListTeam";
import { WeHave } from "./WeHave";

interface OurTeamProps extends DynamicType {
  JustifyContent?: string;
}

export const OurTeam: React.FC<OurTeamProps> = ( ): JSX.Element => {
  return (
    <Container>
      <WeHave
        title="We Have Only Best Skilled Professional Team"
        subtitle="who we are"
        content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA. ZIrcona workers have been working on various large-scale & complex projects, always meeting clients’ expectations."
      />
      <TextBoxesLight data={DataTextFlexible} background="#75E8EF" />
      <Team data={ListTeam} />
    </Container>
  );
};
