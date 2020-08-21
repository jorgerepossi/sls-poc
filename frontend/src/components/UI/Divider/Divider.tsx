import React from "react";
import styled from "@emotion/styled";

const DividerStyled = styled.div`
  width: 100%;
  .container {
    padding: 15px 0;
    margin: 1rem 0 2rem;
    .DividerSeparator {
      overflow: hidden;
      &::before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #b0b0b0;
        display: block;
        opacity: 0.2;
      }
    }
  }
`;

export const Divider = () => {
  return (
    <DividerStyled>
      <div className="container">
        <span className="DividerSeparator"></span>
      </div>
    </DividerStyled>
  );
};
