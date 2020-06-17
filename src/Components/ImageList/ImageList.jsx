import React from "react";
import style from "./ImageList.module.css";
const ImageList = ({ images }) => {
  return (
    <div className={style.imagesList}>
      {images.map((item) => {
        return (
          <img src={item.urls.thumb} alt={item.description} key={item.id} />
        );
      })}
    </div>
  );
};

export default ImageList;
