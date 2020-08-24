import React from "react";
import styled from "@emotion/styled";
import Box from "@material-ui/core/Box";


interface LayoutProps {}

const ContainerStyled = styled.div`
  display: "flex";
  flex-wrap: "wrap";
  flex: 1;
`;

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <ContainerStyled>
      <Box p={5}>{children}</Box>
    </ContainerStyled>
  );
};

