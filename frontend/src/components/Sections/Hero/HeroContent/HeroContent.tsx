import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../../Heading";
import { Section } from "../../../UI/Section";

interface Props {}
export const HeroContent: React.FC<Props> = (): JSX.Element => {
  return (
    <Section id="HeroContentWrapper">
      <Heading
        subtitle="Intuitive User Experience"
        title="Web & Mobile Apps  Development"
        content="We’ve got a vast code base of modules and ready-made solutions that speed up the development process and cut your expenses."
      />
      <Box className=" iconWrapper">
        <span>
          <Link className="submit" to="services">
            Get Starter
          </Link>
        </span>
      </Box>
    </Section>
  );
};
