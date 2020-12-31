import React from "react";
import { Heading } from "../../../Heading";
import { Image } from "../../../UI/Image";
import { Section, SectionCenter } from "../../../UI/Section";
import { AboutUsStyled } from "../AboutUs.styled";

import GlobalIt from "./../../../../assets/images/about-us_01-2.png";
import GlobalItExperience from "./../../../../assets/images/about-us_01-3.png";

interface Props extends DynamicType {}
export const AboutUs: React.FC<Props> = ({ subtitle, title, content }) => {
  return (
    <SectionCenter>
      <AboutUsStyled id="AboutUs" className="containerWrapper super-padding">
        <Section
          styleinline={{ postition: "relative" }}
          className="yearExperience"
        >
          <Image src={GlobalIt} alt="" title="" />
          <Image src={GlobalItExperience} alt="" title="" />
        </Section>
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
