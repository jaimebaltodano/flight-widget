import { FC } from "react";
import LetterDiv from "./LetterDiv";
import styles from "./styles.module.css";

interface Props {
  letters: Array<string>;
  tdStyle: string;
}

const LetterRow: FC<Props> = ({ letters, tdStyle }) => {
  return (
    <td className={styles[tdStyle]}>
      {letters.map((char, _i) => <LetterDiv key={`letter-id-${_i}`} char={char} index={_i}/>)}
    </td>
  );
};

export default LetterRow;

