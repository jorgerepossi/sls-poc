import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import styled from "@emotion/styled";

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
}: HeadingProps) => {
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
        <span>{subtitle}</span>
      </Box>
    );
  } else {
    return <></>;
  }
};

const HeadingStyled = styled.div<DisplayProps>`
  display: ${(props) => props.Display};
  flex-direction: ${(props) => props.Direction};
  justify-content: ${(props) => props.JustifyContent};
  align-content: ${(props) => props.AlignContent};
  align-items: ${(props) => props.AlignItems};
  font-family: "Nunito Sans", sans-serif;
  h3 {
    font-size: 2rem;
    font-weight: 800;
    font-family: "Nunito Sans", sans-serif;
    span {
      &.title {
        color: #1c1c25;
        margin-bottom: 20px;
        display: block;
      }
    }
  }
  .HeadingContentBox {
    p {
      font-family: "Nunito Sans", sans-serif;
      color: #616161;
      font-weight: 400;
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
