import styled from "@emotion/styled";

export const AboutUsStyled = styled.section`
  &#AboutUs {
    @media (min-width: 980px) {
      display: flex;
    }
  }
`;

export const AboutViewStyled = styled.section`
  .column-gap-default {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: 1170px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
    }
    & > :nth-of-type(2),
    > :nth-of-type(4) {
      margin-top: 4rem;
    }
    .top-column {
      .column-wrap {
        padding: 1rem;
        .widget-wrap {
          display: flex;
          .widget-container {
            .info-box {
              .info-box-container {
                display: flex;
                .image-wrapper {
                  figure {
                    margin: 0px 120px 0px 0px;
                    width: 80%;
                  }
                }
                .content_wrapper {
                  .title-wrapper {
                    .title {
                      font-size: 1.3rem;
                      margin: 9px 0px 5px 0px;
                      color: #232323;
                      line-height: 1.5;
                      word-break: break-word;
                      transition: 0.4s;
                      font-weight: 800;
                    }
                  }
                }
              }
            }
            &:hover {
              .info-box
                .info-box-container
                .content_wrapper
                .title-wrapper
                .title {
                color: #ff9083;
              }
            }
          }
        }
      }
    }
  }
`;

export const PhilosophyWrapper = styled.section`
  &#Philosophy {
    background-color: #f8f8f8;

    position: relative;
    overflow: hidden;
    #tsparticles {
      position: absolute;
      width: 100%;
    }

    .ourPhilosophyWrapper {
      @media (min-width: 980px) {
        display: flex;
      }

      .HeadingContent {
        margin: 3rem 0rem auto !important;
      }
      .img-layer_animate {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        .bgImageBrand {
          position: absolute;
          z-index: 1;
          top: 0;
          transform: scale3d(1, 1, 1);
          transition: all 800ms;
          transition-delay: 0s;
          transition-delay: 1800ms;
          transform: translate(0px, 0%);
        }
      }
    }

    img {
      z-index: 1;
      position: relative;
    }
  }
`;
