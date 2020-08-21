import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../Navbar/Data";
import { Box } from "@material-ui/core";
import { List } from "../List";
import { Icon } from "../UI/Icon/IconSet";
import SiteContent from "./Navigation.Styled";

export const Navigation = () => {
  return (
    <SiteContent className="site-header">
      <Box>logo</Box>

      <nav id="Navigation">
        <List data={Data} id="MenuMain" className="Menu" listClass="MenuItem" />
      </nav>
      <Box id="ContactIcon">
        <Link to="/contact" alt="Contact Us" title="Contact Us">
          <div className="iconWrapper">
            <Icon iconimg="ti-email" />
          </div>
        </Link>
      </Box>
    </SiteContent>
  );
};
