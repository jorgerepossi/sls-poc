import React from "react";
import { Container } from "./../UI/Container";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return <Container>{children}</Container>;
};
