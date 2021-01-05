import React from "react";
import { Heading } from "../../Heading";
import { Section, SectionCenter } from "../../index";
import { Image } from "../../UI/Image";

import BigImageCenter from './../../../assets/images/ourwork/portfolio_02.jpg';

interface OurWorkContentProps extends DynamicType {
  data?: any;
  JustifyContent?: string;
}

export const OurWorkContent = ({
  subtitle,
  title,
  content,
  data,
}: OurWorkContentProps): JSX.Element => {
  return (
    <Section id="ContactContent">
      <SectionCenter className="Theme">
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
      <SectionCenter className="containerWrapper">
        <Image src={BigImageCenter} />
      </SectionCenter>
    </Section>
  );
};
