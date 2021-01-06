import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "../../List";
import { Data } from "../../NavLink/Data";
import { Icon } from "../../UI/Icon/IconSet";
import { HamburguerMenu } from "./../HamburguerMenu";
const MobileHeaderStyled = styled.nav`
  &#MobileHeader {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;
    position: sticky;
    width: 100%;
  }
`;

const NavMobileDropDown = styled.div`
  #MenuMain {
    background-color: rgba(49, 49, 49, 1);

    .MenuItem {
      a {
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem;
        color: #ffffff;
        &.active {
          color: var(--orange-color) !important;
        }
        &:hover {
          color: var(--orange-color) !important;
        }
      }
    }
  }
`;

export const MobileMenu = (props) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  let tl = gsap.timeline();
  let countLinks = 50 * Data.length;

  useEffect(() => {
    if (menuState.menuOpened === true) {
      tl.to(" .menuMobile ul", {
        height: countLinks + 20,
        ease: "expo.inOut",
      })
        .to(".hamburguerMenuLink", {
          duration: 0.3,
          scaleY: 1,
          borderTop: 0,
          borderBottom: 0,
          ease: "expo.inOut",
        })

        .to(
          ".hamburguerMenuLink .menuToogle span.top, .hamburguerMenuLink .menuToogle span.bottom",
          {
            duration: 0.1,
            scaleX: 1,
            ease: "expo.inOut",
          }
        )

        .to(".hamburguerMenuLink .menuToogle span.middle", {
          duration: 0.1,
          scaleX: 0,
          ease: "expo.inOut",
        })

        .to(".hamburguerMenuLink .menuToogle span.bottom", {
          rotate: "90deg",
          ease: "expo.inOut",
        })

        .to(".hamburguerMenuLink", {
          rotate: "45deg",
          ease: "expo.inOut",
        });
    } else {
      tl.to(" .menuMobile ul", {
        duration: 0.5,
        transformOrigin: "0% 50%",
        height: 0,
        ease: "expo.inOut",
      })

        .to(".hamburguerMenuLink", {
          rotate: "0deg",
          ease: "expo.inOut",
        })

        .to(".hamburguerMenuLink .menuToogle span.bottom", {
          rotate: "0deg",
          ease: "expo.inOut",
        })
        .to(".hamburguerMenuLink", {
          borderTop: "2px solid",
          borderBottom: "2px solid",
          scaleY: 1,
          height: 22,
          ease: "expo.inOut",
        })

        .to(".hamburguerMenuLink .menuToogle span.middle", {
          scaleX: 1,
          ease: "expo.inOut",
        })

        .to(
          ".hamburguerMenuLink .menuToogle span.top, .hamburguerMenuLink .menuToogle span.bottom",
          {
            duration: 0.1,
            ease: "expo.inOut",
          }
        );
    }
  });

  return (
    <>
      <MobileHeaderStyled id="MobileHeader">
        <HamburguerMenu
          onClick={() => {
            if (menuState.menuOpened) {
              setMenuState({ menuOpened: false });
            } else {
              setMenuState({ menuOpened: true });
            }
          }}
        />

        <Box>logo</Box>

        <Box id="ContactIcon">
          <Link to="/contact" alt="Contact Us" title="Contact Us">
            <div className="iconWrapper">
              <Icon iconimg="ti-email" />
            </div>
          </Link>
        </Box>
      </MobileHeaderStyled>
      <NavMobileDropDown className=" menuMobile">
        <List
          Flex
          DirectionColumn
          data={Data}
          id="MenuMain"
          className="Menu"
          listClass="MenuItem"
          onClick={() => {
            setMenuState({ menuOpened: false });
          }}
        />
      </NavMobileDropDown>
    </>
  );
};
