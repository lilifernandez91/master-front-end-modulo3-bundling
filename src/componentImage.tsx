import React from "react";
import classes from "./componentImage.scss";
import logo from "./images/logo1.png";

export const ImageComponent: React.FC = () => {
  console.log(`Api base: ${process.env.API_BASE}`);

  return (
    <div className={classes.imageContainer}>
      <img className={classes.image} src={logo} alt="Logo de Lemoncode" />
      <p className={classes.text}>Hola Mundo</p>
    </div>
  );
};

export default ImageComponent;
