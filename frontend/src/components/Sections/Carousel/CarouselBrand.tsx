import React from "react";
import { Container } from "../../UI/Container";
import { Section, SectionCenter } from "../../UI/Section";

import Slider from "react-slick";

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
            <div>
              <img src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
            </div>
            <div>
              <div>
                <img src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
              </div>
            </div>
            <div>
              <div>
                <img src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
              </div>
            </div>
            <div>
              <div>
                <img src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
              </div>
            </div>
            <div>
              <div>
                <img src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
              </div>
            </div>
            <div>
              <div>
                <img src="http://zircona.wgl-demo.net/wp-content/uploads/2020/04/partners_01-g.png" />
              </div>
            </div>
          </Slider>
        </SectionCenter>
      </Section>
    </Container>
  );
};
