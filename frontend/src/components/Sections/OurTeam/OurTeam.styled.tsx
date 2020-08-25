import styled from "@emotion/styled";

export const OurTeamStyled = styled.div`
  #OurTeam {
    @media (min-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .OurSkills {
      width: 100%;
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
  }
`;
