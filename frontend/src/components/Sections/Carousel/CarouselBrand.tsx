import { Box } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import { Image } from "../../UI/Image";
import { Section } from "../../UI/Section";
import "./CarouselBrand.scss";

import Nodejs from "./../../../assets/images/carouselbrand/nodejs.png";
import AngularLogo from "./../../../assets/images/carouselbrand/angular.png";
import AWSLogo from "./../../../assets/images/carouselbrand/aws.png";
import PHP from "./../../../assets/images/carouselbrand/php.png";
import Vuejs from "./../../../assets/images/carouselbrand/vuejs.png";
import JS from "./../../../assets/images/carouselbrand/js.png";

interface Props {
  className?: string;
}
export const CarouselBrand: React.FC<Props> = (): JSX.Element => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section id="carouseBrand" className="super-margin">
      <Slider {...settings}>
        <Box>
          <Image src={Nodejs} alt="NodeJS" title="NodeJS" />
        </Box>
        <Box>
          <Image src={AngularLogo} alt="Angular" title="Angular" />
        </Box>

        <Box>
          <Image
            src={AWSLogo}
            alt="Amazon We Server"
            title="Amazon We Server"
          />
        </Box>

        <Box>
          <Image src={Vuejs} alt="Vuejs" title="Vuejs" />
        </Box>
        <Box>
          <Image src={JS} alt="JavaScript" title="JavaScript" />
        </Box>
        <Box>
          <Image src={PHP} alt="PHP Front/Backend" title="PHP Front/Backend" />
        </Box>
         

      
      </Slider>
    </Section>
  );
};
