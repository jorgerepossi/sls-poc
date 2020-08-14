import React from "react";
import { Data } from "./Data";
import styled from "@emotion/styled";
import { List } from "../List";

const SiteContent = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  nav {
    ul {
      display: flex;
    }
  }
`;

export const Navigation = () => {
  return (
    <SiteContent className="site-header">
      <div>logo</div>
      <nav>
        <List data={Data}  />
      </nav>
      <div>redes sociales</div>
    </SiteContent>
  );
};
