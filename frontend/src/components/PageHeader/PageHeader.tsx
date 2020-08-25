import React from "react";
import { Section, SectionCenter } from "../UI/Section";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

const PageHeaderStyled = styled.div`
  background-image: url(http://zircona.wgl-demo.net/wp-content/uploads/2020/04/page-title.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center bottom;
  background-color: #f8f8f8;
  height: 330px;
  margin-bottom: 40px;
  padding-top: 76px;
  padding-bottom: 80px;
  .page-header_title {
    font-weight: 800;
    color: inherit;
    text-transform: capitalize;
    color: #1c1c25;
    font-size: 3rem;
    line-height: 52px;
  }
`;

interface ErrorPageProps {
  title?: string;
}

export const PageHeader = ({ title }: ErrorPageProps): JSX.Element => {
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

  function TitleComponent() {
    if (title) {
      return <HasNoTitle />;
    } else {
      return <HasTitle />;
    }
  }

  return (
    <PageHeaderStyled>
      <Section>
        <SectionCenter
          AlignContent="center"
          Display="flex"
          AlignItems="center"
          JustifyContent="center"
        >
          <TitleComponent />
        </SectionCenter>
      </Section>
    </PageHeaderStyled>
  );
};
