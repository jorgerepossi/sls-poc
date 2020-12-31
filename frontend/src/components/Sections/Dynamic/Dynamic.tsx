import React from "react";
import { SectionCenter, Heading } from "./../../index";
import { Box } from "@material-ui/core";
import "./DynamicStyled.scss";
import { FlipSection } from "./FlipSection";
export const Dynamic = ({
  title,
  content,
  subtitle,
}: DynamicType): JSX.Element => {
  return (
    <SectionCenter Flex className="SectionGrid super-margin containerWrapper">
      <FlipSection />
      <Box className="DynamicSoftware ">
        <Heading
          subtitle={subtitle}
          title={title}
          content={content}
          JustifyContent="center"
          Direction="column"
          Display="flex"
          AlignItems="flex-start"
        />
      </Box>
    </SectionCenter>
  );
};
