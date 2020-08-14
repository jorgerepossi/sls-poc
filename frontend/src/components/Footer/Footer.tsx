import React from "react";
import FooterStyled from "./Footer.styled";
import { Data } from "./../Navbar/Data";
import { List } from "../List";

export const Footer = () => {
  return (
    <FooterStyled>
      <List data={Data} />
    </FooterStyled>
  );
};
