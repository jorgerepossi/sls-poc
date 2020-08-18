import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Icon, IonIcon } from "./../index";

export const Heading = ({ subtitle, title, content }) => {
  return (
    <>
      <Box> {subtitle} </Box>
     
      <Typography component="h3">
                 <span> {title}  <Icon iconimg="fab fa-facebook-f"  /> </span>
      </Typography>
      <Typography>{content}</Typography>
    </>
  );
};
