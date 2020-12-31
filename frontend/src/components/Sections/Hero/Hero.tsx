import { Link } from "react-router-dom";
import React from "react";
import { Heading } from "../../Heading";
import { Container } from "../../UI/Container";
import { ParticlesRandom } from "../../UI/Particles";
import { Section, SectionCenter } from "../../UI/Section";
import { Box } from "@material-ui/core";

import { Image } from "./../../UI/Image";

import home1slider2 from "./../../../assets/images/home-1_slider_2.png";
import home1slider3 from "./../../../assets/images/home-1_slider_3.png";

import styled from "@emotion/styled";

const HeroStyled = styled.section`
  .HeroWrapper {
    .HeadingContent {
      margin: 0rem 0rem 1rem;
      max-width: 580px;

      .title {
        @media (min-width: 980px) {
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
          <SectionCenter>
            <Heading
              subtitle="Intuitive User Experience"
              title="Web & Mobile Apps  Development"
              content="We’ve got a vast code base of modules and ready-made solutions that speed up the development process and cut your expenses."
            />
            <Box className=" iconWrapper">
              <span>
                <Link className="submit" to="services">
                  Get Starter
                </Link>
              </span>
            </Box>
          </SectionCenter>
        </Section>
      </Container>
    </HeroStyled>
  );
};
