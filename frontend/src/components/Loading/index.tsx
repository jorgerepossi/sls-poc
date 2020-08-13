import React from "react";
import { Typography, CircularProgress } from "@material-ui/core";

const Loading = () => (
  <div className="loading-page">
    <Typography variant="h2">Loading...</Typography>
    <CircularProgress />
  </div>
);

export default Loading;
