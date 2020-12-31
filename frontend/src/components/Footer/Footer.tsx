import React from "react";
import FooterStyled from "./Footer.styled";
import { Data, InfoData, Social } from "./../NavLink/Data";
import { List, InfoList, SocialIcon } from "../List";
import { Section, SectionCenter, Divider } from "./../index";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const Footer = () => {
  return (
    <FooterStyled>
      <SectionCenter className="FooterWrapperContent ">
        <Section id="FooterData" Display="flex" JustifyContent="space-between">
          <InfoList data={InfoData} />
        </Section>
        <Divider />
        <Section id="FooterMenu">
          <Box m={4}>
            
            <List data={Data} className="FooterContent " listClass="FooterUlLink" Flex JustifyCenter />
          </Box>
        </Section>
        <Section id="Copyright">
          <Box m={2} textAlign="center">
            <Typography component="p">
              Copyright &copy; 2020 {process.env.REACT_APP_BASE_NAME} with
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
