import styled from "@emotion/styled";

export const DevelopmentCycleStyled = styled.div`
  #DevelopmentCycle {
    display: flex;
    text-align: center;

    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .developmentContent {
      position: relative;
      padding: 35px 10px 35px 10px;
      border-radius: 10px 10px 10px 10px;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s, -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;
      &:hover {
        background-color: #2b2b34;
      }

      .sectionAnimate {
        .objectAnimated_01 img {
          position: absolute;
          top: 27%;
          left: 24%;
        }
        .objectAnimated_02 img {
          position: absolute;
          top: 42%;
          left: 69%;
        }
        .objectAnimated_03 img {
          position: absolute;
          top: 16%;
          left: 68%;
        }

        @keyframes iconAnimated {
          0% {
            transform: translate(0px, 0px) rotate(180deg);
          }

          25% {
            transform: perspective(500px) translate3d(80px, -20px, 10px)
              rotate(-180deg);
          }

          50% {
            transform: translate(0px 5px) rotate(-180deg);
          }

          75% {
            transform: perspective(500px) translate3d(50px, 55px, 10px)
              rotate(180deg);
          }

          100% {
            transform: translate(0px, 0px) rotate(-180deg);
          }
        }
      }

      @media (min-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .imagen-wrapper {
        .imagen-box_img {
          margin: 0px 0px 21px -20px;
          width: 100%;
        }
      }
      .developmentInfoBox {
        transition: 0.4s;

        font-family: "Nunito Sans", Sans-serif;
        font-weight: 400;

        .infobox-title {
          margin: 0px 0px 8px 0px;
          font-size: 21px;
          color: #ffffff;
        }

        .infobox-content {
          margin: 0px 0px 26px 0px;
          color: #c8c8c8;
          font-size: 16px;
          transition: 0.4s;
        }
      }
    }
  }
`;
