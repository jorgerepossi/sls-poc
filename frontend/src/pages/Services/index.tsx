import React from "react";
import { Seo } from "./../../components";
import { OurServices } from "../../components/Sections/OurServices/OurServices";
import { DataService } from "./../../components/Sections/OurServices/Data";

const Services = () => {
  return (
    <>
      <Seo title="Services" metaDescription="ss" />
      <OurServices
        data={DataService}
        subtitle="our services"
        title="Services What We Provide"
        content="Map a strategy, create a user friendly product experience, deliver reliable cross-platform solution with on-boarding and staff training."
      />
    </>
  );
};

export default Services;
