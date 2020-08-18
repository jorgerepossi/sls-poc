import React from "react";

import { Section, SectionCenter } from "../../index";
import { Typography, Box } from "@material-ui/core";
import { Heading } from "../../Heading";

import "./ServiceWrapper.scss";
import { OurDevelopmentCycle } from "../OurDevelopmentCycle";

interface OurServiceProps extends DynamicType {
  data?: any;
}

export const OurServices = ({ subtitle, title, content, data }: OurServiceProps): JSX.Element => {
  return (
    <SectionCenter>
      <Section>
        <Heading subtitle={subtitle} title={title} content={content} />
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
      <Section>
        <OurDevelopmentCycle
          subtitle="what we do"
          title="Our Development Cycle"
          content="But building it before the development of a full-fledged application is a widespread practice that always pays off in the end."
        />
      </Section>
    </SectionCenter>
  );
};
