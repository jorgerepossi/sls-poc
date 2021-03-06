import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Heading } from "../../Heading";
import { Icon, Section, SectionCenter } from "../../index";
import { WhatWeDo } from "./../OurServices/ServiceWrapper.styled";
import { OurDevelopmentCycle } from "./../OurDevelopmentCycle";
import "./ServiceWrapper.styled.tsx";

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
    <>
      <SectionCenter className="containerWrapper">
        <WhatWeDo>
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
                <Box key={key} className="widget-container">
                  <Box className="infobox">
                    <Box className="IconWrapperTop">
                      <Icon iconimg={item.icon} />
                    </Box>
                    <Box className="content_wrapper">
                      <Box className="infobox-title">
                        <Typography component="h3">
                          <span> {item.serviceTitle} </span>
                        </Typography>
                      </Box>

                      <Box className="content_inner_wrapper">
                        <Box className="infobox_content">
                          <Typography>{item.serviceContent}</Typography>
                        </Box>
                        <Box className="infobox_toggle_content">
                          <ul className="list_dot">
                            {item.serviceItems.map((item, key) => (
                              <li key={key}>{item.name}</li>
                            ))}
                          </ul>
                        </Box>
                      </Box>

                      <Box className="infobox-button_wrapper">
                        <Icon iconimg="ti-arrow-top-right" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Section>
        </WhatWeDo>
      </SectionCenter>

      <OurDevelopmentCycle
        subtitle="what we do"
        title="Our Development Cycle"
        content="But building it before the development of a full-fledged application is a widespread practice that always pays off in the end."
      />
    </>
  );
};
