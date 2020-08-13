import React from 'react'
import styled from "@emotion/styled";

interface HeaderProps {}

const HeaderStyled = styled.header`
position: absolute;
z-index: 99;
width: 100%;
left: 0;
top: 0;

`;

export const Header: React.FC<HeaderProps> = ({children}): JSX.Element => {
     return (
          <HeaderStyled>
              {children} 
          </HeaderStyled>
     )
}
