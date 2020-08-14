import React from "react";
import { Typography, CircularProgress } from "@material-ui/core";

const Loading = () => (
  <div className="loading-page">
    <Typography variant="inherit">Loading...</Typography>
    <CircularProgress />
  </div>
);

export default Loading;
