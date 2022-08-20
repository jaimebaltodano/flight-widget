import { flightDef } from "flightMod";
import { useEffect, useState } from "react";
import { flights,cities,remarkLabels } from "../mock/flights";
import LetterRow from "./LetterRow";

const TableBody = () => {
  const [list, setList] = useState<Array<flightDef>>(flights);

  const randomLetter = () =>{
    const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    return letters[Math.floor(Math.random()*letters.length)]
  }

  const randomNumber = (max: number=10) =>{
    const numbers:Array<number> = Array.from(Array(max).keys());
    return numbers[Math.floor(Math.random()*numbers.length)]
  }

  const computeTime = () => {
    let time:any = randomNumber(); 
    if (time < 10){
      time = "0"+time
    }
    time = time+":"+randomNumber(6)+randomNumber();
    return time
  }
  const shuffleUp = () => {
    setList(prev => [...prev.slice(1,prev.length),
      {
        time: computeTime(),
        destination: cities[Math.floor(Math.random()*cities.length)],
        flight: randomLetter()+randomLetter()+" "+randomNumber()+randomNumber()+randomNumber(),
        gate: randomLetter()+" "+randomNumber()+randomNumber(),
        remarks: remarkLabels[Math.floor(Math.random()*remarkLabels.length)],
      },
    ]);
  };

  useEffect(() => {
    const timer = setTimeout(() => shuffleUp(), 2000);
    return () => clearTimeout(timer)
  }, [list]);

  return (
    <tbody>
      {list.map((fli, _i) => (
        <tr key={_i}>
          <LetterRow tdStyle="time" letters={Array.from(fli.time)} />
          <LetterRow
            tdStyle="destination"
            letters={Array.from(fli.destination)}
          />
          <LetterRow tdStyle="flight" letters={Array.from(fli.flight)} />
          <LetterRow tdStyle="gate" letters={Array.from(fli.gate)} />
          <LetterRow tdStyle="remarks" letters={Array.from(fli.remarks)} />
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;
