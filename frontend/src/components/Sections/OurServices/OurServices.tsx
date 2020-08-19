import React from "react";
import { Section, SectionCenter, Icon } from "../../index";
import { Typography, Box } from "@material-ui/core";
import { Heading } from "../../Heading";
import "./ServiceWrapper.scss";

import { OurDevelopmentCycle } from "../OurDevelopmentCycle";

interface OurServiceProps extends DynamicType {
  data?: any;
  JustifyContent?: string;
}

export const OurServices = ({
  subtitle,
  title,
  content,
  data,
}: OurServiceProps): JSX.Element => {
  return (
    <SectionCenter>
      <Section id="OurService">
        <Heading
          subtitle={subtitle}
          title={title}
          content={content}
          className="heading"
          JustifyContent="center"
          Direction="column"
          Display="flex"
        />
      </Section>

      <Section id="ServiceWrapper" Display="grid">
        {data.map((item, key) => {
          return (
            <Box key={key}>
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
                  <Box>
                    <Icon iconimg="ti-arrow-top-right" />
                  </Box>
                </Box>
              </Box>
            </Box>
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
