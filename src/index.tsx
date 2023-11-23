import React from "react";
import { createRoot } from "react-dom/client";
import { ImageComponent } from "./componentImage";
import classes from "./componentImage.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div className={classes.container}>
    <h1>Laboratorio de Webpack</h1>
    <ImageComponent />
  </div>
);
