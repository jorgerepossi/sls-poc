import React from "react";
import { Container } from "../../UI/Container";
import { Section, SectionCenter } from "../../UI/Section";

interface Props {}
export const CarouselBrand: React.FC<Props> = () => {
  return (
    <Container>
      <Section>
        <SectionCenter>brands</SectionCenter>
      </Section>
    </Container>
  );
};
