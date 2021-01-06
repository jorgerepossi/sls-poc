import React from "react";
import styled from "@emotion/styled";

interface Props {
  className?: string;
  children?: any;
  datalabel?: number;
}

const TabWrapper = styled.section`
  &.widget-tabs-container {
    position: relative;
    z-index: 9;

    @media (min-width: 980px) {
      max-width: 490px;
      position: relative;
      z-index: 2;
    }

    .tabs_headings {
      .react-tabs__tab-list {
        display: flex;
      }
      @media (min-width: 980px) {
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-content: center;
        align-items: center;
      }
      .react-tabs__tab {
        .tabs_header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          text-align: center;
          font-weight: 700;
          line-height: 1.3;
          cursor: pointer;
          transition: 0.4s;
          padding: 17px 25px 18px 25px;
          margin: 0px 20px 0px 0px;
          color: #828282;
          font-weight: 800;
          &::after {
            content: "";
            background-color: #e5e5e5;
            z-index: 1;
            width: 100%;
            height: 3px;
            border-radius: 3px;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: 0.4s;
          }
        }
      }
      .react-tabs__tab--selected {
        .tabs_header {
          font-weight: 800;
          color: #000 !important;
          &::after {
            background-color: #67e7ef;
          }
        }
      }
    }
  }

  .tabs_content-wrap {
    margin-bottom: 3rem;
    @media (min-width: 980px) {
      max-width: 490px;
    }

    .tabs_content {
      letter-spacing: -0.15px;
      padding: 31px 0px 5px 0px;
      color: #616161;
    }
  }
`;

export const TabsStyled: React.FC<Props> = ({
  children,
  className,
  datalabel,
}) => {
  return (
    <TabWrapper className={className} data-label={datalabel}>
      {children}
    </TabWrapper>
  );
};
