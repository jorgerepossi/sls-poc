import React from "react";
import FooterStyled from "./Footer.styled";
import { Data, InfoData } from "./../Navbar/Data";
import { List, Info } from "../List";
import { SectionCenter } from "./../index";

export const Footer = () => {
  return (
    <FooterStyled>
      <SectionCenter className="footerContent ">
        <List data={Data} className="footerContent " Flex JustifyCenter />
        <Info data={InfoData} />
        <p>Copyright © 2020 by VerboStudio. All Rights Reserved.</p>
      </SectionCenter>
    </FooterStyled>
  );
};
