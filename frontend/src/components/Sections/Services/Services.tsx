import React from "react";
import { SectionCenter } from "./../../index";
import { Typography, Box } from "@material-ui/core";

export const Services = ({ subtitle, title, content }: DynamicType): JSX.Element => {
  return (
    <SectionCenter>
      <Box> {subtitle} </Box>
      <Typography component="h3">
        <span> {title} </span>
      </Typography>
      <Typography>{content}</Typography>
    </SectionCenter>
  );
};
