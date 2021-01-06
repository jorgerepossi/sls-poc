import styled from "@emotion/styled";

export const OurTeamStyled = styled.div`
  #OurTeam {
    @media (min-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .OurSkills {
      width: 100%;
      overflow: hidden;
      margin-bottom: 2rem;
      @media (min-width: 767px) {
        overflow: inherit;
      }
      .HeadingContent {
        padding: 3rem 0px 3rem;
        @media (min-width: 980px) {
          padding: 3rem 0px 0rem !important;
        }
      }

      h3 {
        span {
          font-size: 40px;
        }
      }
      @media (min-width: 980px) {
        width: 500px;
        max-width: 500px;
      }
    }
    .pie-content_wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      @media (min-width: 767px) {
        flex-wrap: nowrap;
      }
      .circular-content_wrapper {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        width: 50%;
        padding: 0rem 1rem 1rem;
        .caption_text {
          font-size: 1.4rem;
          @media (min-width: 980px) {
            font-size: 30px;
          }
        }
        .caption_team {
          padding: 10px;
          font-size: 0.9rem;
          @media (min-width: 980px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
