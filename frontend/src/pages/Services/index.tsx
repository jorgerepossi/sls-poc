import React from "react";
import { Seo, PageHeader, WeDo, CarouselBrand } from "./../../components";
import { OurServices } from "../../components/Sections/OurServices/OurServices";
import { DataService } from "./../../components/Sections/OurServices/Data";

const Services = () => {
  
  return (
    <>
      <Seo title="Services" metaDescription="ss" />
      <PageHeader  />
      <OurServices
        data={DataService}
        subtitle="Our Services"
        title="Services What We Provide"
        content="Map a strategy, create a user friendly product experience, deliver reliable cross-platform solution with on-boarding and staff training."
      />
      <CarouselBrand className="super-margin" />
     <WeDo
        subtitle="what we do"
        title="Custom IT Solutions for Your Business"
        content="Zircona is an innovative and dynamic software development, outsourcing and consulting company. We have proven success and experience in building Dedicated Development Teams of different sizes for our international customers"
      />
       
    </>
  );
};

export default Services;
