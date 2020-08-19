import React from "react";
import { Container } from "./../UI/Container";
import Box from "@material-ui/core/Box";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <Container>
      <Box p={5}>{children}</Box>
    </Container>
  );
};
