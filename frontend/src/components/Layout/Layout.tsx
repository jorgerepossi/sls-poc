import React from 'react'


interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children}): JSX.Element => {
     return (
          <div>
               {children}
              
          </div>
     )
}
