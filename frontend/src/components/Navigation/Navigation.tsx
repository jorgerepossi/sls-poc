import React from "react";
import { Link } from "react-router-dom";
import { Data } from "../Navbar/Data";
import { Box } from "@material-ui/core";
import { List } from "../List";
import { Icon } from "../UI/Icon/IconSet";
import SiteContent from "./Navisation.Styled";

export const Navigation = () => {
  return (
    <SiteContent className="site-header">
      <Box>logo</Box>

      <nav id="Navigation">
        <List data={Data} />
      </nav>
      <Box>
        <Link to="/contact">
          <Icon iconimg="ti-email" />
        </Link>
      </Box>
    </SiteContent>
  );
};