import React from "react";
import { Heading } from "../../Heading";
import {  Box } from "@material-ui/core";

export const OurDevelopmentCycle = ({ subtitle, title, content }) => {
  return (
    <Box>
      <Heading subtitle={subtitle} title={title} content={content} />
    </Box>
  );
};
