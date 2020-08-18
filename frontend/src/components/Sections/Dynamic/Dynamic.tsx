import React from "react";
import { SectionCenter, Heading } from "./../../index";
import { Box } from "@material-ui/core";

export const Dynamic = ({
  title,
  content,
  subtitle,
}: DynamicType): JSX.Element => {
  return (
    <SectionCenter  Flex className="SectionGrid  ">
      <Box>hola</Box>
      <Box>
        <Heading subtitle={subtitle} title={title} content={content} />
      </Box>
    </SectionCenter>
  );
};
