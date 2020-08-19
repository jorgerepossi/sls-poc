import React from "react";
import { Data  } from "./Data";
import { Box} from "@material-ui/core";
import styled from "@emotion/styled";
import { List } from "../List";
import { Icon } from "../UI/Icon/IconSet";


const SiteContent = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  nav {
    ul {
      display: flex;
    }
  }
`;

export const Navigation = () => {
  return (
    <SiteContent className="site-header">
      <Box>logo</Box>

      <nav>
        <List data={Data} />
      </nav>
      <Box>
      <Icon iconimg="ti-email" />
      </Box>
    </SiteContent>
  );
};
