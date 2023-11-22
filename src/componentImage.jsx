import React from "react";
import classes from "./componentImage.scss"
import imageLemondode from './images/logo1.png'

export const ImageComponent = () => {

  return (
    <div className={classes.image}>
      <img src={imageLemondode} alt="Logo de Lemoncode" />
      <p>Hola Mundo</p>
    </div>
  );
}

export default ImageComponent;