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

        <Box m={4}>
          <List data={Data} className="footerContent " Flex JustifyCenter />
        </Box>
        <Box m={2} textAlign="center">
          <Typography component="p">
            Copyright © 2020 by
            <a
              href="https://www.verbostudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VerboStudio
            </a>
            . All Rights Reserved.
          </Typography>
        </Box>

        <Section Display="flex" JustifyCenter>
          <SocialIcon data={Social} Flex JustifyCenter />
        </Section>
      </SectionCenter>
    </FooterStyled>
  );
};
