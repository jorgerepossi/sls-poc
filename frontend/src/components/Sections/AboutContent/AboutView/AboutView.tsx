import { Box, Typography } from "@material-ui/core";
import React from "react";
import { AboutViewStyled } from "../AboutUs.styled";
import LetterA from "./../../../../assets/images/about/a.png";
import LetterC from "./../../../../assets/images/about/c.png";
import LetterI from "./../../../../assets/images/about/i.png";
import LetterM from "./../../../../assets/images/about/m.png";

interface Props {}

export const AboutView: React.FC<Props> = () => {
  return (
    <AboutViewStyled>
      <Box className="column-gap-default super-padding">
        <Box className="top-column">
          <Box className="column-wrap">
            <Box className="widget-wrap">
              <Box className="widget-container">
                <Box className="info-box">
                  <Box className="info-box-container">
                    <Box className="image-wrapper">
                      <figure>
                        <img src={LetterM} alt="" title="" />
                      </figure>
                    </Box>
                    <Box className="content_wrapper">
                      <Box className="title-wrapper">
                        <Typography variant="h3" className="title">
                          Machine Learning
                        </Typography>
                      </Box>
                      <Typography paragraph={true}>
                        Strategy experience and analytical expertise combine to
                        enable.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="top-column">
          <Box className="column-wrap">
            <Box className="widget-wrap">
              <Box className="widget-container">
                <Box className="info-box">
                  <Box className="info-box-container">
                    <Box className="image-wrapper">
                      <figure>
                        <img src={LetterC} alt="" title="" />
                      </figure>
                    </Box>
                    <Box className="content_wrapper">
                      <Box className="title-wrapper">
                        <Typography variant="h3" className="title">
                          Computer Vision
                        </Typography>
                      </Box>
                      <Typography paragraph={true}>
                        Strategy experience and analytical expertise combine to
                        enable.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="top-column">
          <Box className="column-wrap">
            <Box className="widget-wrap">
              <Box className="widget-container">
                <Box className="info-box">
                  <Box className="info-box-container">
                    <Box className="image-wrapper">
                      <figure>
                        <img src={LetterI} alt="" title="" />
                      </figure>
                    </Box>
                    <Box className="content_wrapper">
                      <Box className="title-wrapper">
                        <Typography variant="h3" className="title">
                          Internet Of Things
                        </Typography>
                      </Box>
                      <Typography paragraph={true}>
                        Strategy experience and analytical expertise combine to
                        enable.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="top-column">
          <Box className="column-wrap">
            <Box className="widget-wrap">
              <Box className="widget-container">
                <Box className="info-box">
                  <Box className="info-box-container">
                    <Box className="image-wrapper">
                      <figure>
                        <img src={LetterA} alt="" title="" />
                      </figure>
                    </Box>
                    <Box className="content_wrapper">
                      <Box className="title-wrapper">
                        <Typography variant="h3" className="title">
                          Augmented Reality
                        </Typography>
                      </Box>
                      <Typography paragraph={true}>
                        Strategy experience and analytical expertise combine to
                        enable.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </AboutViewStyled>
  );
};
