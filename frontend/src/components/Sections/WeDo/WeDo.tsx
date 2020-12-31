import { Box } from "@material-ui/core";
import React from "react";
import { Heading } from "../../Heading";
import { Section } from "../../UI/Section";
import { DataCustomIt } from "./Data";

import Home02 from "../../../assets/images/home/home_1-02.png";
import Home01 from "../../../assets/images/home/home_1-01.png";
import Home03 from "../../../assets/images/home/home_1-03.png";
import Home04 from "../../../assets/images/home/home_1-04.png";
import Home05 from "../../../assets/images/home/home_1-05.png";
import Home06 from "../../../assets/images/home/home_1-06.png";

interface Props extends DynamicType {}
export const WeDo: React.FC<Props> = ({ subtitle, title, content }) => {
  return (
    <Section id="weDo" className="super-margin">
      <Section id="customIt">
        <Heading
          subtitle={subtitle}
          title={title}
          content={content}
          JustifyContent="center"
          Direction="column"
          Display="flex"
          AlignItems="flex-start"
          className=""
        />
        <Box className="customIt_List">
          {DataCustomIt.map((item, k) => (
            <Box className=" widget-info-box" key={k}>
              <Box className="widget-container">
                <Box className="infobox">
                  <Box className="infobox_wrapper layout-left">
                    <Box className="media-wrapper media_text-wrapper">
                      <span className="media_text">{item.number}</span>
                    </Box>
                    <Box className="content_wrapper">
                      <Box className="infobox-title_wrapper">
                        <h3 className="infobox_title">{item.title}</h3>
                      </Box>
                      <Box className="content_inner_wrapper">
                        <Box className="infobox_content">
                          <p>{item.text}</p>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>
      <Section className="widget-container-animation">
        <Box className="widget-container-animation_wrapper">
          <Box>
            <Box>
              <Box className="img-layer_image-wrapper ">
                <Box className="img-layer_image slide-up" style={{ zIndex: 2 }}>
                  <figure>
                    <img src={Home02} alt="" />
                  </figure>
                </Box>
              </Box>
              <Box className="img-layer_image-wrapper ">
                <Box className="img-layer_image">
                  <img src={Home01} alt="" />
                </Box>
              </Box>
              <Box className="img-layer_image-wrapper ">
                <Box
                  className="img-layer_image slide-right"
                  style={{ zIndex: 2 }}
                >
                  <img src={Home03} alt="" />
                </Box>
              </Box>
              <Box className="img-layer_image-wrapper ">
                <Box className="img-layer_image" style={{ zIndex: 2 }}>
                  <img src={Home04} alt="" />
                </Box>
              </Box>
              <Box className="img-layer_image-wrapper ">
                <Box className="img-layer_image" style={{ zIndex: 2 }}>
                  <img src={Home05} alt="" />
                </Box>
              </Box>
              <Box className="img-layer_image-wrapper ">
                <Box className="img-layer_image" style={{ zIndex: 2 }}>
                  <img src={Home06} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Section>
    </Section>
  );
};
