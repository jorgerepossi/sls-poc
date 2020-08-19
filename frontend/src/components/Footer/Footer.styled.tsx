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
