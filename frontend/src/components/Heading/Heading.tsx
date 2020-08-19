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
      <Box className="HeadingContentSubTitle">
        <span>{subtitle}</span>
      </Box>

      <Box className="HeadingContentTitle">
        <Typography component="h3">
          <span>{title}</span>
        </Typography>
      </Box>
      <Box className="HeadingContentBox">
        <Typography>{content}</Typography>
      </Box>
    </HeadingStyled>
  );
};

const HeadingStyled = styled.div<DisplayProps>`
  display: ${(props) => props.Display};
  flex-direction: ${(props) => props.Direction};
  justify-content: ${(props) => props.JustifyContent};
  align-content: ${(props) => props.AlignContent};
  align-items: ${(props) => props.AlignItems};
`;

Heading.defaultProps = {
  subtitle: "subtitle",
  title: "title",
  content: "content",
};
