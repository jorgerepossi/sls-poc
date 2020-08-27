import React from "react";
import styled from "@emotion/styled";
import style from "./../../styles/Common.module.css";

const SectionStyled = styled.section<DisplayProps>`
  width: 100%;
  display: ${(props) => props.Display};
  flex-direction: ${(props) => props.Direction};
  justify-content: ${(props) => props.JustifyContent};
  align-content: ${(props) => props.AlignContent};
  align-items: ${(props) => props.AlignItems};
`;

export const Section = ({
  children,
  id,
  className,
  Display,
  Direction,
  AlignItems,
  AlignContent,
  JustifyContent,
  JustifyCenter,
  Theme,
}: SectionProps): JSX.Element => {
  const classes = [JustifyCenter && ` ${style.JustifyCenter}`, Theme && ` ${style.Dark}`, className];

  return (
    <SectionStyled
      id={id}
      className={classes.join(" ")}
      JustifyContent={JustifyContent}
      Direction={Direction}
      Display={Display}
      AlignItems={AlignItems}
      AlignContent={AlignContent}
    >
      {children}
    </SectionStyled>
  );
};

const SectionCenterStyled = styled.section<DisplayProps>`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: ${(props) => props.Display};
  flex-direction: ${(props) => props.Direction};
  justify-content: ${(props) => props.JustifyContent};
  align-content: ${(props) => props.AlignContent};
  align-items: ${(props) => props.AlignItems};
`;

export const SectionCenter: React.FC<SectionCenterProps> = ({
  id,
  children,
  className,
  Display,
  Direction,
  AlignItems,
  AlignContent,
  JustifyContent,

}): JSX.Element => {
  const classes = [className];

  return (
    <SectionCenterStyled
      JustifyContent={JustifyContent}
      Direction={Direction}
      Display={Display}
      AlignItems={AlignItems}
      AlignContent={AlignContent}
      className={classes.join("")}
      id={id}
    >
      {children}
    </SectionCenterStyled>
  );
};
