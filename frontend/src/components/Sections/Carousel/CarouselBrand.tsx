import { Box } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import { Image } from "../../UI/Image";
import { Section } from "../../UI/Section";
import "./CarouselBrand.scss";




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
          <Image src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
        </Box>
        <Box>
          <Box>
            <Image src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
          </Box>
        </Box>
        <Box>
          <Box>
            <Image src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
          </Box>
        </Box>
        <Box>
          <Box>
            <Image src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
          </Box>
        </Box>
        <Box>
          <Box>
            <Image src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
          </Box>
        </Box>
        <Box>
          <Box>
            <Image src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
          </Box>
        </Box>
      </Slider>
    </Section>
  );
};
