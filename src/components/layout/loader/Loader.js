import React from "react";
import "./loader.scss";
import {CircularProgress} from "@mui/material";

const Loader = () => (
  <div className="fallback-spinner">
    <div className="loading">
        <CircularProgress color="primary" />
    </div>
  </div>
);
export default Loader;
