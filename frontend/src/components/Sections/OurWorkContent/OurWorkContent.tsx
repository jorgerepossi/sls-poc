import React from "react";
import { Heading } from "../../Heading";
import { Section, SectionCenter } from "../../index";

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
    </Section>
  );
};
