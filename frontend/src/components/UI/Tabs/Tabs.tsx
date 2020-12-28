import { Box, Typography } from "@material-ui/core";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState } from "react";
import { DataTabs } from "./Data";
import { TabsStyled } from "./Tabs.Styled";
interface Props {}

export const AboutTab: React.FC<Props> = () => {
  return (
    <TabsStyled className="widget-tabs-container">
      <Tabs>
        <Box className=" tabs_headings ">
          <TabList>
            {DataTabs.map((item) => (
              <Tab>
                <h4 className="tabs_header" key={item.tab}>
                  <span className="tabs_title">{item.tab}</span>
                </h4>
              </Tab>
            ))}
          </TabList>
        </Box>
        <Box className="tabs_content-wrap">
          {DataTabs.map((item, key) => (
            <TabPanel>
              <Box className="tabs_content" key={key} data-label={item.key}>
                <Typography>{item.paragraph}</Typography>
              </Box>
              <Box className="tabs_content" key={key} data-label={item.key}>
                <Typography>{item.paragraph2}</Typography>
              </Box>
            </TabPanel>
          ))}
        </Box>
      </Tabs>
    </TabsStyled>
  );
};
