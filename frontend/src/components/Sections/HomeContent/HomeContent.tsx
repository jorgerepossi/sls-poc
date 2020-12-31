import React from "react";
import { DataText } from "../AboutContent/DataText";
import { BigDataAnalysis } from "../BigDataAnalysis";
import { CarouselBrand } from "../Carousel";
import { Dynamic } from "../Dynamic";
import { Hero } from "../Hero";
import { OurDevelopmentCycle } from "../OurServices/OurDevelopmentCycle";
import { TextBoxesLight } from "../TextBoxes";
import { WeDo } from "../WeDo";
import "./HomeContentStyled.scss";

interface Props {}
export const HomeContent: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <CarouselBrand />
      <Dynamic
        subtitle="About Us"
        title="Dynamic Software Development Company"
        content="If you’re searching for talented tech minds who are dedicated to their work, we are a perfect fit. We are a dynamic software development company based in USA. ZIrcona workers have been working on various large-scale & complex projects, always meeting clients’ expectations. The founders of Zircona have over 30 years of combined experience."
      />
      <BigDataAnalysis />
      <OurDevelopmentCycle
        subtitle="what we do"
        title="Our Development Cycle"
        content="But building it before the development of a full-fledged application is a widespread practice that always pays off in the end."
      />
      <TextBoxesLight data={DataText} color="#ffffff" background="" />
      <WeDo
        subtitle="what we do"
        title="Custom IT Solutions for Your Business"
        content="Dispatchsss is an innovative and dynamic software development, outsourcing and consulting company. We have proven success and experience in building Dedicated Development Teams of different sizes for our international customers"
      />
    </>
  );
};
