import React from "react";
import { Heading } from "../../Heading";
import { Container } from "../../UI/Container";
import { SectionCenter } from "../../UI/Section";

interface Props {}
export const Hero: React.FC<Props> = () => {
  return (
    <Container>
      <SectionCenter className="HeroWrapper">
        <Heading
          subtitle="Intuitive User Experience"
          title="Web & Mobile Apps  Development"
          content="We’ve got a vast code base of modules and ready-made solutions that
        speed up the development process and cut your expenses."
        />
      </SectionCenter>
    </Container>
  );
};
