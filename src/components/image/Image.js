import React from "react";
import styles from './image.module.css'

const Image = ({ imageDetails }) => {
  return (
    <li key={imageDetails.id} className={styles.imageContainer}>
      <img 
        width="400" 
        src={imageDetails.urls.regular} 
        key={imageDetails.id} 
        alt={imageDetails.alt_description}
      />
    </li>
  );
};

export default Image;
