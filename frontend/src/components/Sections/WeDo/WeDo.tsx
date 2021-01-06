import { Box } from "@material-ui/core";
import React from "react";
import { Heading } from "../../Heading";
import { Section } from "../../UI/Section";
import { DataCustomIt } from "./Data";
import styled from "@emotion/styled";

import Home02 from "../../../assets/images/home/home_1-02.png";
import Home01 from "../../../assets/images/home/home_1-01.png";
import Home03 from "../../../assets/images/home/home_1-03.png";
import Home04 from "../../../assets/images/home/home_1-04.png";
import Home05 from "../../../assets/images/home/home_1-05.png";
import Home06 from "../../../assets/images/home/home_1-06.png";
import { ParticlesRandom } from "../../UI/Particles";

const WeDoStyled = styled.section`
  #tsparticles {
    position: absolute;
    z-index: -1;
  }
  #weDo {
    display: block;
    position: relative;
    width: 100%;
    @media (min-width: 1024px) {
      display: flex;
    }

    &.weDoMargin {
      margin: 3rem 0rem;
    }

    #customIt {
      background-color: #f8f8f8;
      padding: 1rem 4rem 3rem 4rem;
      border-radius: 0.8rem;
      width: 100%;
      max-width: 850px;
      margin-left: 0px;
      margin-right: 0px;

      @media (max-width: 1024px) {
        padding: 1rem 6rem 6rem 6rem;
        width: 100%;
        margin-left: 50px;
        margin-right: 50px;
      }

      @media (max-width: 767px) {
        padding: 1rem 2rem 2rem 2rem;
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
      }
    }
    .widget-container-animation {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;
      width: 100%;

      @media (max-width: 980px) {
        padding: 1rem 6rem 6rem 6rem;
        width: 100%;
      }

      .widget-container-animation_wrapper {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;

        height: 100%;
        min-height: 1px;
        margin-top: 5rem;

        @media (max-width: 1170px) {
          height: 100%;
        }
        .widget-container-animation_content {
          position: relative;
        }
      }
    }

    .img-layer_image-wrapper:not(:first-child) {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .img-layer_image {
    position: relative;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    &.animationCode {
      animation: animatedFigure 12.5s infinite linear;
    }
  }
`;

const ListMapStyled = styled.section`
  &.customIt_List {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 1170px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .widget-info-box {
      width: 100%;
      .widget-container {
        padding: 0px 0px 34px 0px;
        transition: 0.4s;
        .infobox {
          transition: 0.4s;

          .infobox_wrapper {
            display: flex;

            .infobox_title {
              font-size: 1.5rem;
              transition: 0.4s;
            }

            .media_text {
              margin: 4px 22px 0px -3px;
              color: #ff9083;
            }

            .media_text {
              font-size: 30px;
              line-height: 1em;
              font-weight: 800;
              display: inline-block;
            }
          }

          .layout-left {
            justify-content: flex-start;
          }
        }
        &:hover {
          .infobox_title {
            color: #ff9083;
          }
        }
      }
    }
  }
`;

interface Props extends DynamicType {}

export const ListMap = () => {
  return (
    <ListMapStyled className="customIt_List">
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
    </ListMapStyled>
  );
};

export const WeDo: React.FC<Props> = ({
  subtitle,
  title,
  content,
}): JSX.Element => {
  return (
    <WeDoStyled className="WeDoWrapper">
      <ParticlesRandom />
      <Section id="weDo" className="weDoMargin">
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
          <ListMap />
        </Section>
        <Section className="widget-container-animation">
          <Box className="widget-container-animation_wrapper">
            <Box className="widget-container-animation_content">
              <Box>
                <Box className="img-layer_image-wrapper ">
                  <Box
                    className="img-layer_image slide-up"
                    style={{ zIndex: 2 }}
                  >
                    <img src={Home02} alt="" />
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
                  <Box
                    className="img-layer_image animationCode"
                    style={{ zIndex: 2 }}
                  >
                    <img src={Home06} alt="" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Section>
      </Section>
    </WeDoStyled>
  );
};
