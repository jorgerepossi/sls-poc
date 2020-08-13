import React from "react";
import styled from "@emotion/styled";

interface SectionProps {
  id?: string;
}

const SectionStyled = styled.div`
  width: 100%;
`;

export const Section: React.FC<SectionProps> = ({ children, id }): JSX.Element => {
  return <SectionStyled id={id}>{children}</SectionStyled>;
};
