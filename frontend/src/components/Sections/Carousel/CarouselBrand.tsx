import React from "react";
import { Container } from "../../UI/Container";
import { Section, SectionCenter } from "../../UI/Section";

import Slider from "react-slick";
import { Box } from "@material-ui/core";
import { Image } from "../../UI/Image";

interface Props {}
export const CarouselBrand: React.FC<Props> = () => {
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
    <Container>
      <Section>
        <SectionCenter>
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
        </SectionCenter>
      </Section>
    </Container>
  );
};
