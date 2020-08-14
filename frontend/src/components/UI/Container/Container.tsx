import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  id?: string;
  className?: string;
}

const ContainerStyled = styled.div`
  width: 100%;
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  id,
  className,
}): JSX.Element => {
  return (
    <ContainerStyled id={id} className={className}>
      {children}
    </ContainerStyled>
  );
};
