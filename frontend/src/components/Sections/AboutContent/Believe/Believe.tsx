import { Box } from "@material-ui/core";
import React from "react";
import { Section } from "../../../UI/Section";

import AboutPhilosophy from "./../../../../assets/images/about/philosophy_01-1.png";
import AboutPhilosophy02 from "../../../../assets/images/about/philosophy_01-2.png";
import AboutPhilosophy03 from "../../../../assets/images/about/philosophy_01-3.png";
import AboutPhilosophy04 from "../../../../assets/images/about/philosophy_01-4.png";
import AboutPhilosophy05 from "../../../../assets/images/about/philosophy_01-5.png";
import AboutPhilosophy06 from "../../../../assets/images/about/philosophy_01-6.png";

interface Props {}
export const WeBelieve: React.FC<Props> = () => {
  return (
    <Section className="img-layer_animate">
      <Box>
        <img src={AboutPhilosophy} alt="" />
      </Box>
      <Box className="bgImageBrand">
        <img src={AboutPhilosophy02} alt="" />
      </Box>
      <Box className="bgImageBrand">
        <img src={AboutPhilosophy03} alt="" />
      </Box>
      <Box className="bgImageBrand">
        <img src={AboutPhilosophy04} alt="" />
      </Box>
      <Box className="bgImageBrand">
        <img src={AboutPhilosophy05} alt="" />
      </Box>
      <Box className="bgImageBrand">
        <img src={AboutPhilosophy06} alt="" />
      </Box>
    </Section>
  );
};
