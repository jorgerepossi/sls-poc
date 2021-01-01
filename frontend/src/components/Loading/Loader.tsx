import React from "react";
import "./Loader.scss";

interface Props {}
export const Loader: React.FC<Props> = () => {
  return (
    <div className="LoadingPageContent">
      <div id="status">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
