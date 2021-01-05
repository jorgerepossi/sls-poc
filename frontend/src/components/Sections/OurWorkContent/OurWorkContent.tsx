import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Section, SectionCenter } from "../../index";
import { Image } from "../../UI/Image";
import { ListMap } from "../WeDo";
import BigImageCenter from "./../../../assets/images/ourwork/portfolio_02.jpg";
import BigImageCenter1 from "./../../../assets/images/ourwork/portfolio_single_01.jpg";
import BigImageCenter2 from "./../../../assets/images/ourwork/portfolio_single_02.jpg";
import "./OurWorkContent.scss";

interface OurWorkContentProps extends DynamicType {
  data?: any;
  JustifyContent?: string;
}

const styles = {
  Title: {
    fontSize: "30px",
    fontFamily: " var(--fontFamily)",
    fontWeight: 800,
    color: "#000",
  },
  BigTitle: {
    fontSize: "40px",
    fontFamily: " var(--fontFamily)",
    fontWeight: 800,
    color: "#000",
  },
};

export const OurWorkContent = ({ data }: OurWorkContentProps): JSX.Element => {
  return (
    <Section id="ContactContent">
      <SectionCenter className="containerWrapper super-margin">
        <Image
          src={BigImageCenter}
          alt="Adaptive Design"
          title="Adaptive Design"
        />
      </SectionCenter>
      <SectionCenter className="Theme containerWrapper">
        <Typography style={styles.BigTitle}> Adaptive Design </Typography>
      </SectionCenter>
      <SectionCenter id="adaptativeDesign" className="containerWrapper">
        <Box className="row" style={{ marginBottom: "2rem" }}>
          <Box className="top-column">
            <Box className="column-wrap">
              <Box className="flex widget-wrap">
                <Box className="column-gap-default">
                  {data.map((item) => {
                    return (
                      <Box className="infobox" key={item.id}>
                        <Box className="infobox_wrapper">
                          <Box className="content_wrapper">
                            <Box className="infobox-title_wrapper">
                              <h3 className="infobox_title">{item.title}</h3>
                            </Box>
                            <Box className="content_inner_wrapper">
                              <Box className="infobox_content">
                                {item.content.map((item) => (
                                  <p key={item.id}>{item.name}</p>
                                ))}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="textContentWrapper">
          <Typography style={{ marginBottom: "18px" }}>
            <span className="dropcap-bg tertiary"> C </span>ompanies should
            prepare for every action or inaction to be closely scrutinized. More
            can be done to equip companies with real-time traceability of
            products within global food supply chains. Blockchain, a type of
            distributed ledger technology (DLT), has been increasingly gaining
            market traction in supply chains—for example, in proofing product
            provenance and implementing track-and-trace of products through the
            supply chain. While blockchain alone does not solve traceability, it
            can be a gamechanger. When implemented effectively, it can connect
            and{" "}
            <span style={{ color: "#ff9083", fontWeight: 600 }}>
              enable efficiency, transparency and accountability
            </span>{" "}
            among participating actors. Better and more reliable data can help
            optimize business decisions and reach higher standards for
            production, efficiency and sustainability.
          </Typography>
          <Typography style={{ marginBottom: "18px" }}>
            In general, companies do not know enough about the products that
            they buy and sell to navigate the many complex challenges facing
            today’s global supply chains (e.g., safe, sustainable and ethical).
            Some companies are realizing the business value of traceability for
            efficiency, cost savings, and achieving product premiums in the
            market. However, they must first overcome the mistrust associated
            with validating claims of product identity and traceability.
            Companies should prepare for every action or inaction to be closely
            scrutinized.
          </Typography>
        </Box>
        <Box className="row tiny-margin ">
          <Box className="grid contentImageWrapper">
            <Box className="innerPadding">
              <Image
                src={BigImageCenter1}
                alt="Adaptive Design"
                title="Adaptive Design"
              />
            </Box>
            <Box className="innerPadding">
              <Image
                src={BigImageCenter2}
                alt="Adaptive Design"
                title="Adaptive Design"
              />
            </Box>
          </Box>
        </Box>
        <Box className="textContentWrapper">
          <Typography component="h4" style={styles.Title}>
            How it Works
          </Typography>
          <Typography style={{ marginBottom: "18px" }}>
            While blockchain traceability solutions could be created for all
            four commodities, this study’s findings indicate that certain use
            cases could be prioritized based on value provided and operational
            and market feasibility conditions.{" "}
            <span style={{ textDecoration: "underline", fontWeight: 600 }}>
              <span style={{ color: "#75e8ef", textDecoration: "underline" }}>
                The design and development of the technology
              </span>
            </span>
            and technical solution are similar across use cases. Combining
            blockchain with existing traceability applications need not be
            overly complicated. The least ideal use cases had significant
            operational challenges that are not currently offset by sizeable
            business value and market feasibility to make them investment ready.
          </Typography>
          <Typography style={{ marginBottom: "18px" }}>
            Blockchain is changing the way the world lives and works – but it’s
            only a means to an end, not the end itself. We can help you apply
            this technology to drive your transformation into the future. We
            start with an understanding of your specific aspirations, followed
            by a practical application of blockchain innovation. The
            conversation grows as new opportunities come to light along the way.
            scrutinized.
          </Typography>
        </Box>
        <Box className="tiny-margin">
          <ListMap />
        </Box>
        <Box className="textContentWrapper">
          <Typography component="h4" style={styles.Title}>
            Summary Results
          </Typography>
          <Typography style={{ marginBottom: "18px" }}>
            As the leading independent technology organization, we integrate
            alliances, partnerships, and leaders from every aspect of the
            blockchain ecosystem. The goal? To bring the right combination of
            capabilities to your unique infrastructure, challenges and strategic
            vision. We start with an understanding of your specific aspirations,
            followed by a practical application of blockchain innovation. The
            conversation grows as new opportunities come to light along the way.
            It’s changing the future as we speak—but where do you start? Harness
            Blockchain with real-world applications from the leaders in
            distributed ledger technologies.
          </Typography>
        </Box>
      </SectionCenter>
    </Section>
  );
};
