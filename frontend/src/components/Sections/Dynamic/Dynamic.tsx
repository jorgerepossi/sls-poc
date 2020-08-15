import React from "react";
import { SectionCenter } from "./../../index";
import { Typography, Box } from "@material-ui/core";

export const Dynamic = ({
  title,
  content,
  subtitle,
}: DynamicType): JSX.Element => {
  return (
    <SectionCenter  Flex className="SectionGrid  ">
      <Box>hola</Box>
      <Box>
        <Box> {subtitle} </Box>
        <Typography component="h3">
          <span> {title} </span>
        </Typography>
        <Typography>{content}</Typography>
      </Box>
    </SectionCenter>
  );
};
