import React from "react";
import styled from "@emotion/styled";

interface Props {
  props?: any;
  onClick?: any;
}

const HamburguerStyled = styled.div`
  .hamburguerContent {
            padding: 9px 10px;
            overflow: hidden;
            background-color: var(--orange-color);
            cursor: pointer;
            color: #ffffff;
            border-radius: 8px;

            .hamburguerMenuLink {
                width: 30px;
                height: 22px;
                position: relative;
                transition: height 0.2s ease-in-out linear;
                transform: scaleX(1);

                span {
                    width: 100%;
                    height: 2px;
                    background-color: #ffffff;
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 45%;
                    opacity: 1;
                }

                .menuToogle span.top,
                .menuToogle span.bottom {
                    width: 100%;
                    display: block;
                    opacity: 1;
                    background-color: #ffffff;
                }
            }
        }
`;

export const HamburguerMenu: React.FC<Props> = ({
  props,
  onClick,
}): JSX.Element => {
  return (
    <HamburguerStyled>
      <div className="hamburguerContent" onClick={onClick}>
        <div {...props} className="hamburguerMenuLink">
          <div className="hamburguerContent">
            <div className="menuToogle">
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
          </div>
        </div>
      </div>
    </HamburguerStyled>
  );
};
