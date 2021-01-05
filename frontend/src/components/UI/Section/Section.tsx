import React from "react";
import styled from "styled-components";
import style from "./../../styles/Common.module.css";

const SectionStyled = styled.section<DisplayProps>`
  width: 100%;
  display: ${(props) => props.Display};
  align-items: ${(props) => props.AlignItems};
  flex-direction: ${(props) => props.Direction};
  align-content: ${(props) => props.AlignContent};
  justify-content: ${(props) => props.JustifyContent};
 

  &.Theme {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.fontColor};
    .HeadingContent {
      display: inline-block;
      text-align: center;
      width: 100%;
      .HeadingContentSubTitle {
        .HeadingContentSubTitle_inner {
          color: ${(props) => props.theme.colors.fontColor};
          background-color: #a8aaf1;
        }
      }
      .HeadingContentTitle {
        h3 {
          .title {
            color: ${(props) => props.theme.colors.fontColor};
          }
        }
      }
      p {
        color: #c8c8c8 !important ;
      }
    }
  }
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
  styleinline,
}: SectionProps): JSX.Element => {
  const classes = [JustifyCenter && ` ${style.JustifyCenter}`, className];

  return (
    <SectionStyled
      id={id}
      className={classes.join(" ")}
      JustifyContent={JustifyContent}
      Direction={Direction}
      Display={Display}
      AlignItems={AlignItems}
      AlignContent={AlignContent}
      style={styleinline}
    >
      {children}
    </SectionStyled>
  );
};

const SectionCenterStyled = styled.section<DisplayProps>`
  max-width: 1190px;
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
