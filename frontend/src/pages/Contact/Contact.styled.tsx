import styled from "@emotion/styled";

export const ContantWrapper = styled.section`
  display: flex;
  .col-33 {
    width: 33.333%;
  }
  .col-66 {
    width: 66.666%;
  }

  .widgetWrapper {
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;

    &:first-of-type {
      .widget-container {
        padding: 20px 30px 27px 35px;
        transition: background 1s;
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        border-color: #e8e8e9;
        border-radius: 10px 10px 10px 10px;
        transition: 0.4s;
        background-position: 0px 150px;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .widgetWrap {
      position: relative;
      width: 100%;

      .widget-container {
        transition: background 1s, border 0.4s, border-radius 0.4s,
          box-shadow 0.4s;
        .infobox {
          .infobox-wrapper {
            .iconWrapper {
              transition: 0.4s;
              z-index: 9;
              span {
                &:hover:after {
                  transform: translate(0px, 0px);
                }
              }

              .icon {
                box-shadow: 0px 0px 0px 2px #1c1c25 inset;
                i {
                  color: #1c1c25;
                }
              }
            }
          }
        }
        &:nth-of-type(1) {
          background-image: url("http://zircona.wgl-demo.net/wp-content/uploads/2020/04/info-box_contacts-2.jpg");
        }
        &:nth-of-type(2) {
          background-image: url("http://zircona.wgl-demo.net/wp-content/uploads/2020/04/info-box_contacts.jpg");
        }
        &:nth-of-type(3) {
          background-image: url("http://zircona.wgl-demo.net/wp-content/uploads/2020/04/info-box_contacts-3.jpg");
        }
        .infobox-wrapper {
          display: flex;
          align-content: center;
          align-items: center;
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }
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

        &:hover {
          background-position: 0px 0px;
          background-repeat: no-repeat;
          background-size: cover;
          border-style: solid;
          border-width: 2px 2px 2px 2px;
          border-color: #1c1c25;
          .infobox {
            .infobox-wrapper {
              .iconWrapper {
                transition: 0.4s;
                span {
                  &:after {
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
      }
    }
  }
`;
