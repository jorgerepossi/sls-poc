import React, { useEffect } from "react";
import { Section, SectionCenter } from "../UI/Section";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import PageHeaderImage from "./../../assets/images/page_title_elements.png";
import PageHeaderTitle from "./../../assets/images/page-title.jpg";

const PageHeaderContent = styled.div`
  background: url(${PageHeaderImage});

  position: absolute;
  transform-style: preserve-3d;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center bottom;
  transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 500ms ease-out;
  -moz-transition: all 500ms ease-out;
  -o-transition: all 500ms ease-out;
  transition: all 500ms ease-out;
`;
const PageHeaderStyled = styled.div`
  position: relative;
  background: url(${PageHeaderTitle});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center bottom;
  background-color: #f8f8f8;
  height: 330px;
  margin-bottom: 20px;

  padding-top: 76px;
  padding-bottom: 80px;
  .page-header_title {
    font-weight: 800;
    text-transform: capitalize;
    color: #1c1c25;
    font-size: 3rem;
    line-height: 52px;
  }
`;

interface ErrorPageProps {
  title?: string;
  className?: string;
}

export const PageHeader = ({
  title,
  className,
}: ErrorPageProps): JSX.Element => {
  useEffect(() => {
    function parallax(e) {
      document.querySelectorAll<HTMLElement>(".layer").forEach((layer) => {
        const speed: any = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 50;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = ` translate3d(${x}px, ${y}px, 0px)   `;
      });
    }
    window.addEventListener("mousemove", parallax);
    return () => window.removeEventListener("mousemove", parallax);
  }, []);

  let location = useLocation();
  let regex = "-";

  function HasTitle() {
    return (
      <h1 className="page-header_title">
        {location.pathname.substr(1).replace(regex, " ")}
      </h1>
    );
  }

  function HasNoTitle() {
    return <h1 className="page-header_title">{title}</h1>;
  }

  const TitleComponent = ({ className }) => {
    if (title) {
      return <HasNoTitle />;
    } else {
      return <HasTitle />;
    }
  };

  return (
    <PageHeaderStyled>
      <Section>
        <PageHeaderContent className="layer" data-speed="2" />
      </Section>
      <Section>
        <SectionCenter
          AlignContent="center"
          Display="flex"
          AlignItems="center"
          JustifyContent="center"
        >
          <TitleComponent className={className} />
        </SectionCenter>
      </Section>
    </PageHeaderStyled>
  );
};
