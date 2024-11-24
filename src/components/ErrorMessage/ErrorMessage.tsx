import { FC } from "react";
import style from "./ErrorMessage.module.css";

interface ErrorProps {
  message: string;
}

const ErrorMessage: FC<ErrorProps> = ({ message }) => {
  return <div className={style.errorMessage}>{message}</div>;
};

export default ErrorMessage;
