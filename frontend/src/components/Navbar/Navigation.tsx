import React from "react";
import { Data } from "./Data";
import { Navbar } from "./Navbar";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {Data.map((item, key) => (
          <li key={key}>
            <Navbar to={item.to} className="menu" sitelink={item.sitelink} title={item.seo} alt={item.seo} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
