import React from "react";

import { Container } from "../../UI/Container";
import { ParticlesRandom } from "../../UI/Particles";
import { Section, SectionCenter } from "../../UI/Section";

import { Image } from "./../../UI/Image";

import home1slider2 from "./../../../assets/images/home-1_slider_2.png";
import home1slider3 from "./../../../assets/images/home-1_slider_3.png";

import styled from "@emotion/styled";
import { HeroImage } from "./HeroImage";
import { HeroContent } from "./HeroContent";

const HeroStyled = styled.section`
  #HeroContentWrapper {
    width: 100%;
    max-width: 580px;
  }
  .HeroWrapper {
    .HeroWrapper_content {
      display: flex;
      height: 750px;
      width: 100%;
      z-index: 20;
      opacity: 1;
      visibility: inherit;
      position: relative;
      @media (max-width: 980px) {
        flex-direction: column;
        height: auto;
      }
    }
    .HeadingContent {
      margin: 0rem 0rem 1rem;
      max-width: 580px;

      .title {
        @media (min-width: 1100px) {
          font-size: 60px;
        }
      }
    }
  }
`;

interface Props {}
export const Hero: React.FC<Props> = () => {
  return (
    <HeroStyled>
      <Container className="marginBigBottom">
        <Image src={home1slider2} alt="" title="" className="floatLeft" />
        <Image
          src={home1slider3}
          alt=""
          title=""
          className="floatLeft bottom"
        />
        <Section className="HeroWrapper">
          <ParticlesRandom />
          <SectionCenter className="HeroWrapper_content">
            <HeroContent />
            <HeroImage />
          </SectionCenter>
        </Section>
      </Container>
    </HeroStyled>
  );
};
