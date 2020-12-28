import React from "react";
import { Box } from "@material-ui/core";
import { Section, SectionCenter } from "../../index";
import { Heading } from "../../Heading";
import { OurTeamStyled } from "./OurTeam.styled";
import TeamImg01 from "./../../../assets/images/team/team_01.png";
import { CircularProgressWithLabel } from "./CircularProgress";

interface OurTeamProps extends DynamicType {
  JustifyContent?: string;
}

export const OurTeam = ({
  subtitle,
  title,
  content,
}: OurTeamProps): JSX.Element => {
  return (
    <SectionCenter>
      <OurTeamStyled>
        <Section id="OurTeam" Display="grid">
          <Section>
            <Box className="imagenContent">
              <img src={TeamImg01} className="fluid-image" alt="" />
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
            <Box>
              <CircularProgressWithLabel value={75} text="Developers" />
              <CircularProgressWithLabel value={45} text="UI/UX designers" />
              <CircularProgressWithLabel value={25} text="Leadership" />
            </Box>
          </Section>
        </Section>
      </OurTeamStyled>
    </SectionCenter>
  );
};
