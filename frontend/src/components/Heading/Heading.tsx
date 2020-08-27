import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import styled from "@emotion/styled";
import style from "./../styles/Common.module.css";

export const Heading = ({
  id,
  title,
  content,
  subtitle,
  className,
  Display,
  Direction,
  AlignItems,
  AlignContent,
  JustifyContent,
 
}: HeadingProps): JSX.Element => {
  const addAllClasses = ["HeadingContent "];
  const classes = [className, addAllClasses];

  return (
    <HeadingStyled
      id={id}
      className={classes.join(" ")}
      JustifyContent={JustifyContent}
      Direction={Direction}
      Display={Display}
      AlignItems={AlignItems}
      AlignContent={AlignContent}
     
    >
      <Subtitle subtitle={subtitle} />
      <Box className="HeadingContentTitle">
        <Typography component="h3">
          <span className="title">{title}</span>
        </Typography>
      </Box>
      <Box className="HeadingContentBox">
        <Typography className="SideMargin">{content}</Typography>
      </Box>
    </HeadingStyled>
  );
};

const Subtitle = ({ subtitle }) => {
  if (subtitle) {
    return (
      <Box className="HeadingContentSubTitle">
        <Box>{subtitle}</Box>
      </Box>
    );
  } else {
    return <></>;
  }
};

const HeadingStyled = styled.div<DisplayProps>`
  padding: 20px;
  display: ${(props) => props.Display};
  flex-direction: ${(props) => props.Direction};
  justify-content: ${(props) => props.JustifyContent};
  align-content: ${(props) => props.AlignContent};
  align-items: ${(props) => props.AlignItems};
  @media (min-width: 981px) {
    margin: 3rem 0rem;
    padding: 0px;
  }
  h3 {
    font-size: 2rem;
    font-weight: 800;

    
      &.title {
        color: #1c1c25;
        margin-bottom: 20px;
        display: block;
        line-height: 1.35em;
      
    }
  }
  .HeadingContentSubTitle {
    margin-bottom: 1rem;
    div {
      color: #33358c;
      background-color: #e7e7fb;
      padding: 3px 10px 3px 10px;
      margin: 0px 0px 13px 0px;
      border-radius: 25px 25px 25px 25px;
      font-family: var(--fontFamily);
      line-height: 1.5;
    }
  }
  .HeadingContentBox {
    p {
      color: #616161;
      font-weight: 400 !important;
      font-family: var(--fontFamily);
      line-height: 1.875;
    }
  }
  /** color: #616161; */
`;

Heading.propsTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

Heading.defaultProps = {
  subtitle: "subtitle",
  title: "title",
  content: "content",
  Display: "flex",
  Direction: "column",
};
