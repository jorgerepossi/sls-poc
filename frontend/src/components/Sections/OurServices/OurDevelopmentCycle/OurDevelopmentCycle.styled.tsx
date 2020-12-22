import styled from "@emotion/styled";

export const DevelopmentCycleStyled = styled.div`
  #DevelopmentCycle {
    display: flex;
    text-align: center;
    padding-bottom: 50px;

    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 20px 50px 20px;
    }
    .developmentContent {
      position: relative;
      padding: 35px 10px 35px 10px;
      border-radius: 10px 10px 10px 10px;
      transition: background 0.3s, border 0.3s, border-radius 0.3s,
        box-shadow 0.3s, -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;
      &:hover {
        background-color: #2b2b34;
        &:first-child {
          .infobox-title {
            color: var(--orange-color) !important;
            transition: background 0.3s, border 0.3s, border-radius 0.3s,
              box-shadow 0.3s, -webkit-border-radius 0.3s,
              -webkit-box-shadow 0.3s;
          }
        }
        &:nth-child(2) {
          .infobox-title {
            color: var(--cyan-color) !important;
            transition: background 0.3s, border 0.3s, border-radius 0.3s,
              box-shadow 0.3s, -webkit-border-radius 0.3s,
              -webkit-box-shadow 0.3s;
          }
        }
        &:last-child {
          .infobox-title {
            color: var(--violet-color) !important;
            transition: background 0.3s, border 0.3s, border-radius 0.3s,
              box-shadow 0.3s, -webkit-border-radius 0.3s,
              -webkit-box-shadow 0.3s;
          }
        }
      }

      .sectionAnimate {
        .objectAnimated_01 img {
          position: absolute;
          top: 27%;
          left: 24%;
          width: 10px;
        }
        .movecenter img {
          position: absolute;

          transition: all 0.2s ease-in-out;
          animation: iconAnimatedCenter 12.5s infinite linear;
          width: 10px;
        }

        .movetop img {
          position: absolute;

          transition: all 0.2s ease-in-out;
          animation: iconAnimated 9.5s infinite linear;
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

        .movedown img {
          position: absolute;

          transition: all 0.2s ease-in-out;
          animation: iconAnimatedDown 9.5s infinite linear;
        }

        @keyframes iconAnimated {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes iconAnimatedCenter {
          0% {
            transform: translateX(-10px) rotate(360deg);
          }
          50% {
            transform: translateX(30px);
          }
          100% {
            transform: translateX(-10px) rotate(360deg);
          }
        }
        @keyframes iconAnimatedDown {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translate3D(15px, 10px, 15px);
          }
          100% {
            transform: translateY(0px);
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
          display: flex;
          justify-content: center;
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
          transition: background 0.3s, border 0.3s, border-radius 0.3s,
            box-shadow 0.3s, -webkit-border-radius 0.3s, -webkit-box-shadow 0.3s;
        }

        .infobox-content {
          margin: 0px 0px 26px 0px;
          color: #c8c8c8;
          font-size: 16px;
          transition: 0.4s;
        }
      }
    }

    .button-read-more {
      color: #ffffff;
    }
  }
`;
