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
  return (
    <SectionStyled id={id} className={classname}>
      {children}
    </SectionStyled>
  );
};

interface SectionCenterProps {
  className?: string;
  children: any;
}

const SectionCenterStyled = styled.section`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  
`;

export const SectionCenter: React.FC<SectionCenterProps> = ({ children, className }): JSX.Element => (
  <SectionCenterStyled className={className}> {children} </SectionCenterStyled>
);
