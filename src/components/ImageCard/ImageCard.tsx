import { FC } from "react";
import style from "./ImageCard.module.css";
import { Image } from "../types";

interface CardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: FC<CardProps> = ({ image, onClick }) => {
  return (
    <div className={style.card}>
      <img
        className={style.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
      <ul className={style.info}>
        <li className={style.author}> {image.user.name}</li>
        <li className={style.likes}>❤️ {image.likes}</li>
      </ul>
    </div>
  );
};

export default ImageCard;
