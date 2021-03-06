import styled from "@emotion/styled";

export const WhatWeDo = styled.div`
  #OurService {
    .HeadingContentBox {
      width: 100%;
      max-width: 650px;
    }
  }

  #ServiceWrapper {
    padding-bottom: 80px;
    .widget-container {
      padding: 50px 63px 37px 50px;
      border-style: solid;
      border-width: 2px 1px 1px 2px;
      border-color: #e8e8e9;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s, -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;

      &:hover {
        background-color: #1c1c25;
        border-style: solid;
        border-width: 2px 1px 1px 2px;
        border-color: #1c1c25;

        .infobox-title {
          h3 {
            color: #ffffff !important;
          }
        }

        .infobox .infobox_toggle_content {
          opacity: 1;
          transition: opacity 0.6s ease-in;
        }

        .infobox-button_wrapper {
          span {
            &.icon {
              transform: rotate(360deg);
            }
          }
        }

        .IconWrapperTop {
          transform: translateY(-75px);
          transition-duration: 0.6s;
          opacity: 0;
        }

        .content_wrapper {
          .infobox-title,
          .content_inner_wrapper {
            transform: translateY(-50px);
            transition-duration: 0.6s;
          }

          .content_inner_wrapper {
            .infobox_content {
              opacity: 0;
            }
          }
        }
      }

      .infobox {
        font-family: var(--fontFamily);
        position: relative;

        .IconWrapperTop {
          transition-duration: 0.6s;

          span {
            padding: 0;
            margin: 0;
            color: #ff9083;
            border-color: #ff9083;
            overflow: hidden;
            width: 52px;
            height: 52px;
            display: block;
            border-radius: 0;
            margin-bottom: 20px;
            position: relative;

            i {
              &:before {
                font-size: 3rem;
                margin: 0;
              }
            }
          }
        }

        .content_wrapper {
          transition-duration: 0.6s;
        }

        .infobox-title {
          transition-duration: 0.6s;

          h3 {
            margin: 0px 0px 6px 0px;
            font-size: 21px;
            color: #232323;
          }
        }

        .content_inner_wrapper {
          position: relative;
          transition-duration: 0.6s;

          .infobox_content {
            opacity: 1;
          }
        }

        p {
          color: #616161;
          font-weight: 400 !important;
          font-family: var(--fontFamily);
          line-height: 1.875;
        }

        .infobox-button_wrapper {
          position: absolute;
          top: 0;
          right: 0;
          margin: -40px -40px 0px 0px;
          transition: 0.4s;

          span {
            &.icon {
              margin: 10px 0px;
              padding: 0;
            }
          }
        }

        .infobox_toggle_content {
          padding: 3px 0px 0px 0px;
          color: #c8c8c8;
          opacity: 0;
          transition-delay: 0s;
          font-family: "Nunito Sans", Sans-serif;

          &:not(:only-child) {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }

          ul {
            &.list_dot {
              li {
                padding-left: calc(0.5em + 14px);
                position: relative;

                &::before {
                  background-color: var(--cyan-color);
                }

                &::before {
                  top: 1.05em;
                  left: 2px;
                  width: 0.3125em;
                  height: 0.3125em;
                  border-radius: 50% !important;
                }

                &::before {
                  content: "";
                  position: absolute;
                  z-index: 1;
                  border-radius: unset;
                }
              }
            }
          }
        }
      }

      position: relative;
    }

    @media (min-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 980px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  #WhatWeDo {
    .SideMargin {
      margin: 0 25% 0 25%;
      text-align: center;

      
    }

    @media (max-width: 767px) {
      #DevelopmentCycle {
        display: flex;
        flex-direction: column;
        width: 560px;
        margin: 0px auto;
      }
    }
  }
`;
