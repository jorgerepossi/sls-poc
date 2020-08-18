import React from "react";
import { Section, SectionCenter } from "../../index";
import { Typography, Box } from "@material-ui/core";
import "./ServiceWrapper.scss";

interface OurServiceProps extends DynamicType {
  data?: any;
}

export const OurServices = ({ subtitle, title, content, data }: OurServiceProps): JSX.Element => {
  return (
    <SectionCenter>
      <Section>
        <Box> {subtitle} </Box>
        <Typography component="h3">
          <span> {title} </span>
        </Typography>
        <Typography>{content}</Typography>
      </Section>

      <Section id="ServiceWrapper" Grid>
        {data.map((item, key) => {
          return (
            <div key={key}>
              <Box>
                <Box>{item.icon}</Box>
                <Box>
                  <Box>
                    <Typography component="h3">
                      <span> {item.serviceTitle} </span>
                    </Typography>
                  </Box>
                  <Box>
                    <Box>
                      <Typography>{item.serviceContent}</Typography>
                    </Box>
                    <Box>
                      <ul className="">
                        {item.serviceItems.map((item, key) => (
                          <li key={key}>{item.name}</li>
                        ))}
                      </ul>
                    </Box>
                  </Box>
                  <Box> arrow </Box>
                </Box>
              </Box>
            </div>
          );
        })}
      </Section>
    </SectionCenter>
  );
};
