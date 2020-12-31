import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Image } from "../../../UI/Image";
import { AboutViewStyled } from "../AboutUs.styled";

import { DataText } from "./../DataText";

interface Props {}

export const AboutView: React.FC<Props> = () => {
  const { REACT_APP_API_URL } = process.env;
  return (
    <AboutViewStyled>
      <Box className="column-gap-default super-margin">
        {DataText.map((item, key) => (
          <Box className="top-column">
            <Box className="column-wrap">
              <Box className="widget-wrap">
                <Box className="widget-container">
                  <Box className="info-box">
                    <Box className="info-box-container">
                      <Box className="image-wrapper">
                        <figure>
                          <Image
                            src={item.imagen}
                            alt={item.title}
                            title={item.title}
                          />
                        </figure>
                      </Box>
                      <Box className="content_wrapper">
                        <Box className="title-wrapper">
                          <Typography variant="h3" className="title">
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography paragraph={true}>{item.text}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </AboutViewStyled>
  );
};
