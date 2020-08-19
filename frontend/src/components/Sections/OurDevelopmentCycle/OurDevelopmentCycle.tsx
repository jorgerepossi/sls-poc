import React from "react";
import { Heading } from "../../Heading";

export const OurDevelopmentCycle = ({ subtitle, title, content }) => {
  return (
    <Heading
      subtitle={subtitle}
      title={title}
      content={content}
      JustifyContent="center"
      Direction="column"
      Display="flex"
      AlignItems="center"
    />
  );
};
