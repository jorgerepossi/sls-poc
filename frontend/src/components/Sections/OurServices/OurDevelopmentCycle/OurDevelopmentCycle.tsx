import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "../../../Heading";
import { Section, SectionCenter } from "../../../index";
import { DevelopmentCycleStyled } from "./OurDevelopmentCycleStyled.styled";
import { Typography, Box } from "@material-ui/core";
import iconBoxes01 from "./../../../../assets/images/icon-boxes_01.png";
import iconBoxes02 from "./../../../../assets/images/icon-boxes_02.png";
import iconBoxes03 from "./../../../../assets/images/icon-boxes_03.png";
import ObjectCross01 from "./../../../../assets/images/object/object-cross_01.png";
import ObjectElipse01 from "./../../../../assets/images/object/object-ellipse_01.png";
import ObjectCross02 from "./../../../../assets/images/object/object-cross_02.png";
import ObjectElipse02 from "./../../../../assets/images/object/object-ellipse_02.png";
import ObjectCross03 from "./../../../../assets/images/object/object-cross_03.png";
import ObjectElipse03 from "./../../../../assets/images/object/object-ellipse_03.png";

import { DataCycle } from "./Data";

export const OurDevelopmentCycle = ({ subtitle, title, content }) => {
  return (
    <Section id="WhatWeDo" className="Theme">
      <SectionCenter>
        <Heading
          subtitle={subtitle}
          title={title}
          content={content}
          JustifyContent="center"
          Direction="column"
          Display="flex"
          AlignItems="center"
        />
      </SectionCenter>

      <SectionCenter>
        <DevelopmentCycleStyled>
          <Section id="DevelopmentCycle">
            <Section className="developmentContent">
              <Box className="sectionAnimate">
                <Box className="objectAnimated_01">
                  <img src={ObjectCross01} alt="" />
                </Box>
                <Box className="objectAnimated_02">
                  <img src={ObjectCross01} alt="" />
                </Box>
                <Box className="objectAnimated_03">
                  <img src={ObjectElipse01} alt="" />
                </Box>
              </Box>
              <Box className="imagen-wrapper">
                <figure className="imagen-box_img">
                  <span>
                    <img src={iconBoxes01} alt="" />
                  </span>
                </figure>
              </Box>
              <Box className="developmentInfoBox">
                <Box className="infobox-title_wrapper">
                  <h3 className="infobox-title">Find New Ideas</h3>
                </Box>
                <Box className="infobox-content">
                  <Typography>
                    Zircona is an innovative and dynamic software development,
                    outsourcing and consulting.
                  </Typography>
                </Box>
              </Box>
              <Box className="infobox-button_wrapper btn_align-default">
                <Link
                  to="/about"
                  className="wgl-infobox_button button-read-more"
                >
                  <span className="flaticon-keyboard-right-arrow-button"></span>
                  Learn More
                </Link>
              </Box>
            </Section>

            <Section className="developmentContent">
              <Box className="sectionAnimate">
                <Box className="objectAnimated_01">
                  <img src={ObjectCross02} alt="" />
                </Box>
                <Box className="objectAnimated_02">
                  <img src={ObjectCross02} alt="" />
                </Box>
                <Box className="objectAnimated_03">
                  <img src={ObjectElipse02} alt="" />
                </Box>
              </Box>

              <Box className="imagen-wrapper">
                <figure className="imagen-box_img">
                  <span>
                    <img src={iconBoxes02} alt="" />
                  </span>
                </figure>
              </Box>
              <Box className="developmentInfoBox">
                <Box className="infobox-title_wrapper">
                  <h3 className="infobox-title">Diagnosis & Analysis</h3>
                </Box>
                <Box className="infobox-content">
                  <Typography>
                    Zircona is an innovative and dynamic software development,
                    outsourcing and consulting.
                  </Typography>
                </Box>
              </Box>

              <Box className="infobox-button_wrapper btn_align-default">
                <Link
                  to="/about"
                  className="wgl-infobox_button button-read-more"
                >
                  <span className="flaticon-keyboard-right-arrow-button"></span>
                  Learn More
                </Link>
              </Box>
            </Section>

            <Section className="developmentContent">
              <Box className="sectionAnimate">
                <Box className="objectAnimated_01">
                  <img src={ObjectCross03} alt="" />
                </Box>
                <Box className="objectAnimated_02">
                  <img src={ObjectCross03} alt="" />
                </Box>
                <Box className="objectAnimated_03">
                  <img src={ObjectElipse03} alt="" />
                </Box>
              </Box>

              <Box className="imagen-wrapper">
                <figure className="imagen-box_img">
                  <span>
                    <img src={iconBoxes03} alt="" />
                  </span>
                </figure>
              </Box>
              <Box className="developmentInfoBox">
                <Box className="infobox-title_wrapper">
                  <h3 className="infobox-title">Find New Ideas</h3>
                </Box>
                <Box className="infobox-content">
                  <Typography>
                    Zircona is an innovative and dynamic software development,
                    outsourcing and consulting.
                  </Typography>
                </Box>
              </Box>

              <Box className="infobox-button_wrapper btn_align-default">
                <Link
                  to="/about"
                  className="wgl-infobox_button button-read-more"
                >
                  <span className="flaticon-keyboard-right-arrow-button"></span>
                  Learn More
                </Link>
              </Box>
            </Section>
          </Section>
        </DevelopmentCycleStyled>
      </SectionCenter>
    </Section>
  );
};
