import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Container } from "../../UI/Container";
import { Image } from "../../UI/Image";
import { Section, SectionCenter } from "../../UI/Section";
import { Icon } from "./../../UI/Icon/IconSet";

import Notebook from "./../../../assets/images/bigdata/laptop_01.png";
import Notebook2 from "./../../../assets/images/bigdata/laptop_02.png";
import Notebook3 from "./../../../assets/images/bigdata/laptop_03.png";
import Notebook4 from "./../../../assets/images/bigdata/laptop_04.png";
import Notebook5 from "./../../../assets/images/bigdata/laptop_05.png";

import "./BigDataStyled.scss";

interface Props {}
export const BigDataAnalysis: React.FC<Props> = () => {
  return (
    <Container className="super-margin">
      <SectionCenter>
        <Section id="top-section">
          <Box className="container column-gap-default">
            <Box className="row">
              <Box className="column top-column">
                <Box className="widget-container">
                  <Box className="infobox-wrapper  layout-left">
                    <Box className="infobox">
                      <Box className=" media-wrapper icon-wrapper ">
                        <Icon iconimg="ti-arrow-top-right" />
                      </Box>
                      <Box className="content-wrapper">
                        <Box className="infobox-title-wrapper">
                          <Box className="infobox_title">
                            <Typography component="h3">
                              Computer Vision
                            </Typography>
                          </Box>
                          <Box className="content_inner_wrapper">
                            <Box className="infobox_content">
                              <Typography>
                                Strategy experience and analytical expertise
                                combine to enable.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="infobox">
                      <Box className=" media-wrapper icon-wrapper ">
                        <Icon iconimg="ti-arrow-top-right" />
                      </Box>
                      <Box className="content-wrapper">
                        <Box className="infobox-title-wrapper">
                          <Box className="infobox_title">
                            <Typography component="h3">
                              Internet Of Things
                            </Typography>
                          </Box>
                          <Box className="content_inner_wrapper">
                            <Box className="infobox_content">
                              <Typography>
                                Strategy experience and analytical expertise
                                combine to enable.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="infobox">
                      <Box className=" media-wrapper icon-wrapper ">
                        <Icon iconimg="ti-arrow-top-right" />
                      </Box>
                      <Box className="content-wrapper">
                        <Box className="infobox-title-wrapper">
                          <Box className="infobox_title">
                            <Typography component="h3">
                              Augmented Reality
                            </Typography>
                          </Box>
                          <Box className="content_inner_wrapper">
                            <Box className="infobox_content">
                              <Typography>
                                Strategy experience and analytical expertise
                                combine to enable.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="column inner-column">
                <Box className="widget-container">
                  <Image src={Notebook} alt="" title="" />
                </Box>
                <Box className="widget-container">
                  <Image src={Notebook2} alt="" title="" />
                </Box>
                <Box className="widget-container">
                  <Image src={Notebook3} alt="" title="" />
                </Box>
                <Box className="widget-container">
                  <Image src={Notebook4} alt="" title="" />
                </Box>
                <Box className="widget-container">
                  <Image src={Notebook5} alt="" title="" />
                </Box>
              </Box>
              <Box className="column top-column">
                <Box className="widget-container">
                  <Box className="infobox-wrapper layout-right">
                    <Box className="infobox">
                      <Box className="content-wrapper">
                        <Box className="infobox-title-wrapper">
                          <Box className="infobox_title">
                            <Typography component="h3">
                              Machine Learning
                            </Typography>
                          </Box>
                          <Box className="content_inner_wrapper">
                            <Box className="infobox_content">
                              <Typography>
                                Strategy experience and analytical expertise
                                combine to enable.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      <Box className=" media-wrapper icon-wrapper ">
                        <Icon iconimg="ti-arrow-top-right" />
                      </Box>
                    </Box>
                    <Box className="infobox">
                      <Box className="content-wrapper">
                        <Box className="infobox-title-wrapper">
                          <Box className="infobox_title">
                            <Typography component="h3">
                              Artificial Intelligence
                            </Typography>
                          </Box>
                          <Box className="content_inner_wrapper">
                            <Box className="infobox_content">
                              <Typography>
                                Strategy experience and analytical expertise
                                combine to enable.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className=" media-wrapper icon-wrapper ">
                        <Icon iconimg="ti-arrow-top-right" />
                      </Box>
                    </Box>
                    <Box className="infobox">
                      <Box className="content-wrapper">
                        <Box className="infobox-title-wrapper">
                          <Box className="infobox_title">
                            <Typography component="h3">
                              Big Data Analysis
                            </Typography>
                          </Box>
                          <Box className="content_inner_wrapper">
                            <Box className="infobox_content">
                              <Typography>
                                Strategy experience and analytical expertise
                                combine to enable.
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className=" media-wrapper icon-wrapper ">
                        <Icon iconimg="ti-arrow-top-right" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Section>
      </SectionCenter>
    </Container>
  );
};
