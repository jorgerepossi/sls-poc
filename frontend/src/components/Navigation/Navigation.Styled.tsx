import React from "react";
import styled from "@emotion/styled";

const SiteContentStyled = styled.div`
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #e5e5e5;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  min-height: 100px;
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0 2rem;
  nav {
    &#Navigation {
      height: 100px;
      ul {
        font-weight: bold;
        line-height: 30px;
        font-size: 1rem;
        height: 100%;
        padding: 0;
        li {
          height: 100%;
          a {
            display: flex;
            position: relative;
            z-index: 1;
            height: 100%;
            align-items: center;
            vertical-align: middle;
            padding: 0 28px;
            color: inherit;
            text-transform: initial;
            opacity: 1;
            transition: 0.2s;
            padding: 0 2.4rem;
            color: #1c1c25;
            &.active {
              color: var(--orange-color);
              &:before {
                content: "";
                width: 5px;
                height: 5px;
                background-color: var(--orange-color);
                display: block;
                border-radius: 2px;
                left: 50%;
                position: absolute;
                bottom: 25px;
                visibility: visible;
                transition: all 0.2s ease-in-out;
                animation: dotMove 3s infinite linear;
              }
            }
            &:hover {
              color: var(--orange-color);
              &:before {
                content: "";
                width: 5px;
                height: 5px;
                background-color: var(--orange-color);
                display: block;
                border-radius: 2px;
                left: 50%;
                position: absolute;
                bottom: 25px;
                visibility: visible;
                transition: all 0.2s ease-in-out;
              }
            }
            &:before {
              content: "";
              width: 6px;
              height: 6px;
              background-color: var(--orange-color);
              display: block;
              border-radius: 2px;
              left: 50%;
              position: absolute;
              bottom: 35px;
              visibility: hidden;
              transition: all 0.2s ease-in-out;
            }
          }
        }
      }
    }

    ul {
      display: flex;
    }
  }
  #ContactIcon {
    .iconWrapper {
      transition: 0.4s;
      position: relative;
      &::after {
        content: "Contact";
        position: absolute;
        line-height: 3.5rem;
        right: 0px;
        z-index: -10;
        transition: 0.4s all ease-in-out;
        opacity: 0;
        color: var(--orange-color);
        font-weight: 800;
      }
      &:hover {
        &::after {
          transition: 0.4s all ease-in-out;
          position: absolute;
          line-height: 3rem;
          right: 100px;
          opacity: 1;
        }
        .icon {
          box-shadow: 0px 0px 0px 2px #fff inset;
          i {
            color: #fff;
          }
        }
      }
      .icon {
        box-shadow: 0px 0px 0px 2px #000 inset;
        i {
          color: #1c1c25;
        }
      }
      span {
        position: relative;
        &:after {
          background-color: var(--orange-color);
          transform: translate(6px, 6px);
        }
        &:hover:after {
          transform: translate(0px, 0px);
        }
      }
    }
  }
`;
const SiteContent = ({ children, className }) => {
  return (
    <SiteContentStyled className={className}>{children}</SiteContentStyled>
  );
};

export default SiteContent;
