import React, { useEffect, useState } from "react";
import { DesktopMenu } from "./DesktopMenu/DesktopMenu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import "./Navigation.Styled";

export const Navigation = (props) => {
  function useWindowSize() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        // removemos el evento addEventListener
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return size;
  }

  const windowWidth = useWindowSize();
  let windowWidthPlus = windowWidth > 980 ? <DesktopMenu /> : <MobileMenu />;

  return <>{windowWidthPlus}</>;
};
