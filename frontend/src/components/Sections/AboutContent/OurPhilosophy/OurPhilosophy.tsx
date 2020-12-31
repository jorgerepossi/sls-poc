import React from "react";
import { Heading } from "../../../Heading";
import { ParticlesRandom } from "../../../UI/Particles";
import { Section, SectionCenter } from "../../../UI/Section";
import { AboutTab } from "../../../UI/Tabs";
import { PhilosophyWrapper } from "../AboutUs.styled";
import { WeBelieve } from "../Believe/Believe";

interface Props extends DynamicType {}
export const OurPhilosophy: React.FC<Props> = ({
  subtitle,
  title,
  content,
}) => {
  return (
    <PhilosophyWrapper id="Philosophy">
      <ParticlesRandom />
      <SectionCenter className="ourPhilosophyWrapper  super-padding">
        <Section>
          <Heading
            subtitle={subtitle}
            title={title}
            className="heading"
            JustifyContent="center"
            Direction="column"
            Display="flex"
          />

          <AboutTab />
        </Section>
        <WeBelieve />
      </SectionCenter>
    </PhilosophyWrapper>
  );
};
