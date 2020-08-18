import React from "react";
import FooterStyled from "./Footer.styled";
import { Data, InfoData, Social } from "./../Navbar/Data";
import { List, Info, SocialIcon } from "../List";
import { Section, SectionCenter } from "./../index";

export const Footer = () => {
  return (
    <FooterStyled>
      <SectionCenter className="footerContent ">
        <Section Flex JustifyCenter>
          <Info data={InfoData} />
        </Section>

        <List data={Data} className="footerContent " Flex JustifyCenter />
        <p>
          Copyright © 2020 by{" "}
          <a href="https://www.verbostudio.com/" target="_blank" rel="noopener noreferrer">
            VerboStudio
          </a>
          . All Rights Reserved.
        </p>
        <Section Flex JustifyCenter>
          <SocialIcon data={Social} Flex JustifyCenter />
        </Section>
      </SectionCenter>
    </FooterStyled>
  );
};
