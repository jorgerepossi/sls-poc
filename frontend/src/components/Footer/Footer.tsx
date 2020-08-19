import React from "react";
import FooterStyled from "./Footer.styled";
import { Data, InfoData, Social } from "./../Navbar/Data";
import { List, Info, SocialIcon } from "../List";
import { Section, SectionCenter } from "./../index";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const Footer = () => {
  return (
    <FooterStyled>
      <SectionCenter className="footerContent ">
        <Section id="" Display="flex" JustifyContent="space-between">
          <Info data={InfoData} />
        </Section>

        <Section>
          <Box m={4}>
            <List data={Data} className="FooterContent " listClass="FooterUlLink" Flex JustifyCenter />
          </Box>
        </Section>
        <Section id="Copyright">
          <Box m={2} textAlign="center">
            <Typography component="p">
              Copyright @copy; 2020 {process.env.REACT_APP_BASE_NAME} by
              <span>
                <a href="https://www.verbostudio.com/" target="_blank" rel="noopener noreferrer">
                  VerboStudio
                </a>
              </span>
              . All Rights Reserved.
            </Typography>
          </Box>
        </Section>

        <Section id="FooterLinks" Display="flex" JustifyCenter>
          <Box m={4}>
            <SocialIcon data={Social} Flex JustifyCenter />
          </Box>
        </Section>
      </SectionCenter>
    </FooterStyled>
  );
};
