import React from 'react'
import { Section, SectionCenter } from '../UI/Section'
import { useLocation } from "react-router-dom";


export const PageHeader = () => {
     let location = useLocation();
     return (
       <div>
         <Section>
           <SectionCenter>
             <h2>{location.pathname.substr(1)}</h2>
           </SectionCenter>
         </Section>
       </div>
     );
}
