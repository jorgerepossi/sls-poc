import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../../../index";

import {DataCycle} from './Data';


const ListCycle = () => {
  return (
    <Section id="DevelopmentCycle">
      {DataCycle.map((item, key) => {
        return (
          <Section className="developmentContent" key={key}>
            <Box className="sectionAnimate">
              {item.tinyicons.map((item, key) => {
                return (
                  <Box className={item.classes} key={key}>
                    <img src={item.icon} alt="" />
                  </Box>
                );
              })}
            </Box>
            <Box className="imagen-wrapper">
              <figure className="imagen-box_img">
                <span>
                  <img src={item.image} alt={item.title} title={item.title} />
                </span>
              </figure>
            </Box>
            <Box className="developmentInfoBox">
              <Box className="infobox-title_wrapper">
                <h3 className="infobox-title">{item.title}</h3>
              </Box>
              <Box className="infobox-content">
                <Typography>{item.text}</Typography>
              </Box>
            </Box>
            <Box className="infobox-button_wrapper btn_align-default">
              <Link
                to={item.link}
                className="wgl-infobox_button button-read-more"
              >
                <span className="flaticon-keyboard-right-arrow-button"></span>
                Learn More
              </Link>
            </Box>
          </Section>
        );
      })}
    </Section>
  );
};

export default ListCycle;
