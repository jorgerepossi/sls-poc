import React from "react";
import { Heading } from "../../../Heading";
import { Section, SectionCenter } from "../../../UI/Section";
import { PhilosophyWrapper } from "../AboutUs.styled";

interface Props extends DynamicType {}
export const OurPhilosophy: React.FC<Props> = ({
  subtitle,
  title,
  content,
}) => {
  return (
    <PhilosophyWrapper id="Philosophy">
      <SectionCenter>
        <Section>
          <Heading
            subtitle={subtitle}
            title={title}
            className="heading"
            JustifyContent="center"
            Direction="column"
            Display="flex"
          />
        </Section>
      </SectionCenter>
    </PhilosophyWrapper>
  );
};
