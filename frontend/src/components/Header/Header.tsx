import React from 'react'
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({children}): JSX.Element => {
     return (
          <div>
              {children} 
          </div>
     )
}
