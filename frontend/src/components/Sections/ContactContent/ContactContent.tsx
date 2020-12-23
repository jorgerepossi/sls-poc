import React from "react";
import { Heading } from "../../Heading";
import { Section, SectionCenter } from "../../index";
import { ContactForm } from "./../../UI/Form";

interface ContactContentProps extends DynamicType {
  data?: any;
  JustifyContent?: string;
}

export const ContactContent = ({
  subtitle,
  title,
  content,
  data,
}: ContactContentProps): JSX.Element => {
  return (
    <SectionCenter>
      <Section id="ContactContent">
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
      <ContactForm
        onSubmit={({ firstName, email, message }) => {
          console.log(firstName, email, message);
        }}
      />
    </SectionCenter>
  );
};
