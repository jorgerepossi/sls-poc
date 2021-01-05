import { Box } from "@material-ui/core";
import React from "react";
import { Image } from "../../../UI/Image";
import { Section } from "../../../UI/Section";

import styled from "@emotion/styled";

import ImagenSlide01 from "./../../../../assets/images/home/home-1_slider_1-01.png";
import ImagenSlide02 from "./../../../../assets/images/home/home-1_slider_1-02.png";
import ImagenSlide03 from "./../../../../assets/images/home/home-1_slider_1-03.png";
import ImagenSlide04 from "./../../../../assets/images/home/home-1_slider_1-04.png";
import ImagenSlide05 from "./../../../../assets/images/home/home-1_slider_1-05.png";
import ImagenSlide06 from "./../../../../assets/images/home/home-1_slider_1-06.png";
import ImagenSlide07 from "./../../../../assets/images/home/home-1_slider_1-07.png";
import ImagenSlide08 from "./../../../../assets/images/home/home-1_slider_1-08.png";
import ImagenSlide09 from "./../../../../assets/images/home/home-1_slider_1-09.png";
import ImagenSlide10 from "./../../../../assets/images/home/home-1_slider_1-10.png";
import ImagenSlide11 from "./../../../../assets/images/home/home-1_slider_1-11.png";
import ImagenSlide12 from "./../../../../assets/images/home/home-1_slider_1-12.png";
import ImagenSlide13 from "./../../../../assets/images/home/home-1_slider_1-13.png";
import ImagenSlide14 from "./../../../../assets/images/home/home-1_slider_1-14.png";
import ImagenSlide15 from "./../../../../assets/images/home/home-1_slider_1-15.png";

const HeroImagenWrapper = styled.section`
  #HeroImagen {
    position: relative;
    @media (min-width: 980px) {
      position: absolute;
    }
    .HeroImagen_content {
      &:not(:first-child) {
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        height: auto;
        display: block;
      }
      &.moveLeftRight {
        animation: moveLeftRight 4s infinite;
      }
      &.grayScale {
        animation: grayScale 5s infinite;
      }
      &.imagenUp {
        animation: moveImagenUp infinite;
        animation-duration: 5s;
      }
    }

    &:nth-of-type(15) {
      transform: perspective(600px);
    }
  }
`;

interface Props {}
export const HeroImage: React.FC<Props> = (): JSX.Element => {
  return (
    <HeroImagenWrapper id="HeroImagenWrapper">
      <Section id="HeroImagen">
        <Box className="HeroImagen_content  imagenUp">
          <Image src={ImagenSlide01} alt="" title="" />
        </Box>
        <Box
          className="HeroImagen_content imagenUp"
          style={{ animationDuration: "5.1s" }}
        >
          <Image src={ImagenSlide02} alt="" title="" />
        </Box>
        <Box
          className="HeroImagen_content imagenUp"
          style={{ animationDuration: "5.2s" }}
        >
          <Image src={ImagenSlide03} alt="" title="" />
        </Box>
        <Box
          className="HeroImagen_content imagenUp"
          style={{ animationDuration: "5.3s" }}
        >
          <Image src={ImagenSlide04} alt="" title="" />
        </Box>
        <Box
          className="HeroImagen_content imagenUp"
          style={{ animationDuration: "5.4s" }}
        >
          <Image src={ImagenSlide05} alt="" title="" />
        </Box>
        <Box
          className="HeroImagen_content imagenUp"
          style={{ animationDuration: "5.5s" }}
        >
          <Image src={ImagenSlide06} alt="" title="" />
        </Box>
        <Box
          className="HeroImagen_content imagenUp"
          style={{ animationDuration: "5.6s" }}
        >
          <Image src={ImagenSlide07} alt="" title="" />
        </Box>
        <Box className="HeroImagen_content ">
          <Image src={ImagenSlide08} alt="" title="" />
        </Box>
        <Box className="HeroImagen_content grayScale">
          <Image src={ImagenSlide09} alt="" title="" />
        </Box>
        <Box className="HeroImagen_content ">
          <Image src={ImagenSlide10} alt="" title="" />
        </Box>
        <Box className="HeroImagen_content">
          <Image src={ImagenSlide11} alt="" title="" />
        </Box>
        <Box className="HeroImagen_content">
          <Image src={ImagenSlide12} alt="" title="" />
        </Box>
        <Box className="HeroImagen_content">
          <Image src={ImagenSlide13} alt="" title="" />
        </Box>
        <Box
          className="HeroImagen_content imagenUp"
          style={{ animationDuration: "5.7s" }}
        >
          <Image src={ImagenSlide14} alt="" title="" />
        </Box>
        <Box className="HeroImagen_content moveLeftRight">
          <Image src={ImagenSlide15} alt="" title="" />
        </Box>
      </Section>
    </HeroImagenWrapper>
  );
};
