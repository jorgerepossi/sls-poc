import React from 'react'
import styled from "@emotion/styled";

interface HeaderProps {}

const HeaderStyled = styled.header`
position: relative;
z-index: 99;
width: 100%;
 

`;

export const Header: React.FC<HeaderProps> = ({children}): JSX.Element => {
     return (
          <HeaderStyled>
              {children} 
          </HeaderStyled>
     )
}
