import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  id?: string
}

const ContainerStyled = styled.div`
  width: 100%;
`;



export const Container: React.FC<ContainerProps> = ({ children, id }): JSX.Element => {
  return <ContainerStyled id={id}>{children}</ContainerStyled>;
};
