import React from "react";
import { SectionCenter, Heading } from "./../../index";
import { Box } from "@material-ui/core";
import "./DynamicStyled.scss";
import { FlipSection } from "./FlipSection";
import { Section } from "../../UI/Section";
import { IonIcon } from "./../../UI/Icon";

export const Dynamic: React.FC<DynamicType> = ({
  title,
  content,
  subtitle,
}): JSX.Element => {
  return (
    <Section className="super-margin">
      <SectionCenter Flex className="SectionGrid  containerWrapper">
        <FlipSection />
        <Box className="DynamicSoftware ">
          <Heading
            subtitle={subtitle}
            title={title}
            content={content}
            JustifyContent="center"
            Direction="column"
            Display="flex"
            AlignItems="flex-start"
          />
          <Box className=" iconWrapper violet">
            <IonIcon name="play" /> Know How
          </Box>
        </Box>
      </SectionCenter>
    </Section>
  );
};
