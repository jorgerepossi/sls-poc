import styled from "@emotion/styled";

const FooterStyled = styled.footer`
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: var(--dark-color);
  color: #ffffff;
  a {
    color: inherit;
  }

  .FooterWrapperContent {
    #FooterData {
      padding: 2rem 0;
      .InfoContentFooter {
        position: relative;
        z-index: 1;

        &:first-of-type {
          .iconWrapper {
            span {
              position: relative;
              &:after {
                background-color: var(--violet-color);
                transform: translate(6px, 6px);
              }
            }
          }
        }
        &:nth-of-type(2) {
          .iconWrapper {
            span {
              position: relative;
              &:after {
                background-color: var(--orange-color);
                transform: translate(6px, 6px);
              }
            }
          }
        }
        &:last-of-type {
          .iconWrapper {
            span {
              position: relative;
              &:after {
                background-color: var(--cyan-color);
                transform: translate(6px, 6px);
              }
            }
          }
        }
        .iconWrapper {
          transition: 0.4s;
          span {
            &:hover:after {
              transform: translate(0px, 0px);
            }
          }

          .icon {
            box-shadow: 0px 0px 0px 2px #ffffff inset;
            i {
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  .FooterContent {
    li {
      &.FooterUlLink {
        margin-right: calc(80px / 2);
        margin-left: calc(80px / 2);
        &:hover {
          color: var(--orange-color);
        }
        a {
          font-weight: 800;
          font-family: "Nunito Sans", sans-serif;

          &.active {
            color: var(--orange-color);
          }
        }
      }
    }
  }

  #FooterLinks ul li a {
    font-size: 0.8rem;
    width: 35px;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-radius: 50% 50% 50% 50%;
    margin: 0 0.5rem;
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
    text-align: center;
    height: 35px;
    display: block;
    line-height: 35px;
  }

  #Copyright {
    p {
      color: #b0b0b0;
      font-weight: 200;
      font-family: "Nunito Sans", sans-serif;
      span {
        a {
          color: #ffffff;
          font-weight: 600;
          margin-left: 5px;
        }
      }
    }
  }
`;

export default FooterStyled;
