import { FC } from "react";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={styles.loadMore} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
