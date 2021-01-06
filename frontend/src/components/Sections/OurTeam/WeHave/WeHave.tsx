import { Box } from "@material-ui/core";
import React from "react";
import { Heading } from "../../../Heading";
import { Section, SectionCenter } from "../../../UI/Section";
import { CircularProgressWithLabel } from "../CircularProgress";
import { OurTeamStyled } from "../OurTeam.styled";
import TeamImg01 from "./../../../../assets/images/team/team_01.png";

interface Props extends DynamicType {
  JustifyContent?: string;
}
export const WeHave: React.FC<Props> = ({
  subtitle,
  title,
  content,
}): JSX.Element => {
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
            <Section
              Flex
              JustifyCenter
              JustifyContent="space-between"
              className="pie-content_wrapper"
            >
              <CircularProgressWithLabel
                value={75}
                text="Developers"
                style={{
                  color: "hsla(6, 100%, 76%, 100%)",
                  width: 150,
                  height: 150,
                 
                }}
              />
              <CircularProgressWithLabel
                value={45}
                text="UI/UX designers"
                style={{
                  color: "hsl(184, 81%, 67%)",
                  width: 150,
                  height: 150,
                 
                }}
              />
              <CircularProgressWithLabel
                value={25}
                text="Leadership"
                style={{
                  color: "hsl(238, 72%, 80%)",
                  width: 150,
                  height: 150,
                 
                }}
              />
            </Section>
          </Section>
        </Section>
      </OurTeamStyled>
    </SectionCenter>
  );
};
