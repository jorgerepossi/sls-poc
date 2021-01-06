import { Box } from "@material-ui/core";
import React from "react";
import { Section } from "../../UI/Section";
import { DataFlip } from "./DataFlip";
interface Props {}
export const FlipSection: React.FC<Props> = () => {
  return (
    <Section>
      {DataFlip.map((item) => (
        <Section>
          <Section className="Section-boxed Section-height-default Section-height-default Section inner-Section">
            <Box className="container column-gap-extended">
              <Box className="dflex">
                {item.flip.map((item) => (
                  <Box className=" -5d006e8 column col-50 inner-column">
                    <Box className="column-wrap  -populated">
                      <Box className="widget-wrap">
                        <Box className=" -8e142cc widget-image-box wgl-image-box widget widget-flipbox">
                          <Box className="widget-container">
                            <Box className="flipbox type_flip_right">
                              <Box className="flipbox_wrap">
                                <Box className="flipbox_front">
                                  <Box className="flipbox_media-wrap">
                                    <Box className="media-wrapper img-wrapper">
                                      <figure className="image-box_img">
                                        <span>
                                          <img
                                            src={item.image}
                                            title="flip-boxes_01"
                                            alt="flip-boxes_01"
                                          />
                                        </span>
                                      </figure>
                                    </Box>
                                  </Box>
                                  <h3 className="flipbox_title">
                                    <span>{item.title}</span>
                                  </h3>
                                </Box>
                                <Box className="flipbox_back">
                                  <h3 className="flipbox_title">
                                    <span>{item.title}</span>
                                  </h3>
                                  <Box className="flipbox_content">
                                    <p>{item.content}</p>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Section>
        </Section>
      ))}
    </Section>
  );
};
