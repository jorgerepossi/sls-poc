import * as React from "react";
import { Heading } from "../../Heading";
import { Section, SectionCenter } from "../../index";
import { DevelopmentCycleStyled } from "./OurDevelopmentCycle.styled";
import { Box } from "@material-ui/core";
import BackGroundStatic from "./../../../assets/images/services_03.png";
import ListCycle from "./ListCycle";

export const OurDevelopmentCycle = ({ subtitle, title, content }) => {
  return (
    <Section
      id="WhatWeDo"
      className="Theme"
      styleinline={{
        backgroundImage: "url(" + BackGroundStatic + ")",
        overflow: "hidden",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: " no-repeat",
        backgroundColor: "#1C1C25",
      }}
    >
      <Box>
        <SectionCenter>
          <Heading
            subtitle={subtitle}
            title={title}
            content={content}
            JustifyContent="center"
            Direction="column"
            Display="flex"
            AlignItems="center"
            className="center"
          />
        </SectionCenter>
      </Box>

      <SectionCenter>
        <DevelopmentCycleStyled>
          <ListCycle />
        </DevelopmentCycleStyled>
      </SectionCenter>
    </Section>
  );
};
