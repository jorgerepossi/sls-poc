import React from "react";
import { Heading } from "../../../Heading";
import { Section, SectionCenter } from "../../../index";
import { DevelopmentCycleStyled } from "./OurDevelopmentCycleStyled.styled";

export const OurDevelopmentCycle = ({ subtitle, title, content }) => {
  return (
    <Section id="WhatWeDo" className="Theme">
      <SectionCenter>
        <Heading
          subtitle={subtitle}
          title={title}
          content={content}
          JustifyContent="center"
          Direction="column"
          Display="flex"
          AlignItems="center"
        />
      </SectionCenter>
      <SectionCenter>
        <DevelopmentCycleStyled id="DevelopmentCycle">
          <Section>
            <p>Find New Ideas</p>
          </Section>
          <Section>
            <p>Diagnosis & Analysis</p>
          </Section>
          <Section>
            <p>Find New Ideas</p>
          </Section>
        </DevelopmentCycleStyled>
      </SectionCenter>
    </Section>
  );
};
