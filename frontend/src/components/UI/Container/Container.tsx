import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  id?: string;
  className?: string;
  children: any;
}

const ContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  @media (max-width: 980px) {
    padding: 10px;
    
  }
`;

export const Container: React.FC<ContainerProps> = ({ children, id, className }): JSX.Element => {
  return (
    <ContainerStyled id={id} className={className}>
      {children}
    </ContainerStyled>
  );
};
