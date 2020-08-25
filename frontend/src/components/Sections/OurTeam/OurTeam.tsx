import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Section, SectionCenter } from "../../index";
import { Heading } from "../../Heading";
import { OurTeamStyled } from "./OurTeam.styled";
import TeamImg01 from "./../../../assets/images/team/team_01.png";

interface OurTeamProps extends DynamicType {
  JustifyContent?: string;
}

export const OurTeam = ({ subtitle, title, content }: OurTeamProps): JSX.Element => {
  return (
    <SectionCenter>
      <OurTeamStyled>
        <Section id="OurTeam" Display="grid">
          <Section>
            <Box className="imagenContent">
              <img src={TeamImg01} className="fluid-image" />
            </Box>
          </Section>
          <Section className="OurSkills">
            <Box>
              <Heading
                subtitle={subtitle}
                title={title}
                content={content}
                className="heading"
                JustifyContent="center"
                Direction="column"
                Display="flex"
              />
            </Box>
          </Section>
        </Section>
      </OurTeamStyled>
    </SectionCenter>
  );
};
