import React from "react";
import styled from "@emotion/styled";

interface SectionProps {
  id?: string;
  classname?: string;
}

const SectionStyled = styled.section`
  width: 100%;
`;

export const Section: React.FC<SectionProps> = ({ children, id, classname }): JSX.Element => {
  return <SectionStyled id={id} className={classname}>{children}</SectionStyled>;
};
