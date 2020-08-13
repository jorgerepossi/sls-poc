import React from "react";
import { Data } from "./Data";
import { Navbar } from "./Navbar";
import styled from "@emotion/styled";

const SiteContent = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const Navigation = () => {
  return (
    <SiteContent className="site-header">
      <div>logo</div>
      <nav>
        <ul>
          {Data.map((item, key) => (
            <li key={key}>
              <Navbar
                to={item.to}
                className="menu"
                sitelink={item.sitelink}
                title={item.seo}
                alt={item.seo}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div>redes sociales</div>
    </SiteContent>
  );
};
