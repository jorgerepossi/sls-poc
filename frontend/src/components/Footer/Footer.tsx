import React from "react";
import FooterStyled from "./Footer.styled";
import { Data, InfoData } from "./../Navbar/Data";
import { List, Info } from "../List";

export const Footer = () => {
  return (
    <FooterStyled>
      <List data={Data} />
      <Info data={InfoData} />
      <p>Copyright © 2020 by VerboStudio. All Rights Reserved.</p>
    </FooterStyled>
  );
};
