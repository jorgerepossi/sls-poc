import React from "react";
import styled from "@emotion/styled";

const SiteContentStyled = styled.div`
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #e5e5e5;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0 2rem;
  nav {
    &#Navigation {
      ul {
        font-weight: 800;
        line-height: 30px;
        font-size: 17px;
        li {
          a {
            padding: 0 1.5rem;
            display: block;
            color: #1c1c25;
          }
        }
      }
    }
    ul {
      display: flex;
    }
  }
`;
const SiteContent = ({ children, className }) => {
  return (
    <SiteContentStyled className={className}>{children}</SiteContentStyled>
  );
};

export default SiteContent;
