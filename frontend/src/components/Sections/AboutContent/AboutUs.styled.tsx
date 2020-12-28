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
    @media (min-width: 980px) {
      display: flex;
    }
    & > :nth-of-type(2),
    > :nth-of-type(4) {
      margin-top: 4rem;
    }

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
        }
      }
    }
  }
`;

export const PhilosophyWrapper = styled.section`
  &#Philosophy {
    background-color: #f8f8f8;
    // padding: 3rem 0rem;
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
