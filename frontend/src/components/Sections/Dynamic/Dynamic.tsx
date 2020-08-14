import React from "react";
import { SectionCenter } from "./../../index";
import { Typography, Box } from '@material-ui/core'


type DynamicType = {
     subtitle: string;
     content: string;
     title: string;
}

export const Dynamic: React.FC<DynamicType> = ({ title, content, subtitle }): JSX.Element => {
  return (
    <SectionCenter className="SectionGrid Grid">
      <Box>
           hola
      </Box>
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
