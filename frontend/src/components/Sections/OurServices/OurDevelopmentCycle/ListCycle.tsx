import React from "react";
import { Section, SectionCenter } from "../../../index";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export const DataCycle = [
  {
    image: require("./../../../../assets/images/icon-boxes_01.png"),
    title: "Find New Ideas",
    text:
      "Zircona is an innovative and dynamic software development, outsourcing and consulting.",
    tinyicons: [
      {
        icon: require("./../../../../assets/images/object/object-cross_01.png"),
        classes: "objectAnimated_01 movetop",
      },
      {
        icon: require("./../../../../assets/images/object/object-cross_01.png"),
        classes: "objectAnimated_02 movecenter",
      },
      {
        icon: require("./../../../../assets/images/object/object-ellipse_01.png"),
        classes: "objectAnimated_03 movedown",
      },
    ],
    link: "about",
  },
  {
    image: require("./../../../../assets/images/icon-boxes_02.png"),
    title: "Diagnosis & Analysis",
    text:
      "Zircona is an innovative and dynamic software development, outsourcing and consulting.",
    tinyicons: [
      {
        icon: require("./../../../../assets/images/object/object-cross_02.png"),
        classes: "objectAnimated_01 movedown",
      },
      {
        icon: require("./../../../../assets/images/object/object-cross_02.png"),
        classes: "objectAnimated_02 movetop",
      },
      {
        icon: require("./../../../../assets/images/object/object-ellipse_02.png"),
        classes: "objectAnimated_03 movecenter",
      },
    ],
    link: "about",
  },
  {
    image: require("./../../../../assets/images/icon-boxes_03.png"),
    title: "Find New Ideas",
    text:
      "Zircona is an innovative and dynamic software development, outsourcing and consulting.",
    tinyicons: [
      {
        icon: require("./../../../../assets/images/object/object-ellipse_03.png"),
        classes: "objectAnimated_02 movedown",
      },
      {
        icon: require("./../../../../assets/images/object/object-cross_03.png"),
        classes: "objectAnimated_03 movetop",
      },

      {
        icon: require("./../../../../assets/images/object/object-cross_03.png"),
        classes: "objectAnimated_01 movecenter",
      },
    ],
    link: "about",
  },
];

const ListCycle = () => {
  return (
    <Section id="DevelopmentCycle">
      {DataCycle.map((item, i) => {
        return (
          <Section className="developmentContent" key={i}>
            <Box className="sectionAnimate">
              {item.tinyicons.map((item, key) => {
                return (
                  <Box className={item.classes}>
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
