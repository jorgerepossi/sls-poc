import React from "react";
import styled from "@emotion/styled";
import style from "./../../styles/Common.module.css";

const SectionStyled = styled.section`
  width: 100%;
`;

export const Section = ({ children, id, className, Flex, Grid, JustifyCenter }: SectionProps): JSX.Element => {
  const classes = [
    Flex && ` ${style.Flex}`,  
    Grid && ` ${style.Grid}`, 
    JustifyCenter && ` ${style.JustifyCenter}`, className,    ];

  return (
    <SectionStyled id={id} className={classes.join(" ")}>
      {children}
    </SectionStyled>
  );
};

const SectionCenterStyled = styled.section`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const SectionCenter = ({ id, children, className, Flex, Grid }: SectionCenterProps): JSX.Element => {
  const classes = [className, Flex && style.Flex, Grid && style.Grid];

  return (
    <SectionCenterStyled className={classes.join("")} id={id}>
      {children}
    </SectionCenterStyled>
  );
};
