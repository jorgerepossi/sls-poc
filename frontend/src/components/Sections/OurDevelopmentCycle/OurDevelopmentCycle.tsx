import React from "react";
import { Heading } from "../../Heading";
import { Section, SectionCenter } from "../../index";

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
    </Section>
  );
};
