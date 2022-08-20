import { FC, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import styles from "./styles.module.css";

interface Props {
  char: string;
  index: number;
}

const LetterDiv: FC<Props> = ({ char, index }) => {
  const [newLetter, setNewLetter] = useState<string>("");

  useEffect(() => {
    setTimeout(() => setNewLetter(char), 100 * index);
  }, [char, index]);
  return (
    <Letter
      key={`char-${index}`}
      className={`${styles["departure-table-char"]}`}
    >
      {newLetter}
    </Letter>
  );
};

export default LetterDiv;

const letterfade = keyframes`
0%{
  transform: rotateX(0deg);
}50%{
  transform: rotateX(90deg);
}100%{
  transform: rotateX(0deg);
}`;

const Letter = styled.div`
  animation-name: ${letterfade};
  animation-duration: 1s;
`;
