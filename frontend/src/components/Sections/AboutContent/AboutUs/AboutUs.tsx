import React from "react";
import { Heading } from "../../../Heading";
import { Section, SectionCenter } from "../../../UI/Section";
import { AboutUsStyled } from "../AboutUs.styled";

interface Props extends DynamicType {}
export const AboutUs: React.FC<Props> = ({ subtitle, title, content }) => {
  return (
    <SectionCenter>
      <AboutUsStyled id="AboutUs" className="containerWrapper super-padding">
        <Section>hola</Section>
        <Section>
          <Heading
            subtitle={subtitle}
            title={title}
            content={content}
            className="heading"
            JustifyContent="center"
            Direction="column"
            Display="flex"
          />
        </Section>
      </AboutUsStyled>
    </SectionCenter>
  );
};
