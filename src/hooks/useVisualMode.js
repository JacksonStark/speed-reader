import { useState } from "react";

export default function useVisualMode(chunkedData) {
  const [index, setIndex] = useState(0)
  const [displayChunk, setDisplayChunk] = useState(chunkedData[0].join(' '));
  const [list, setList] = useState(chunkedData);
  const [finished, setFinished] = useState(false);
  

  function forward() {
    if (index === list.length - 1) {
      setFinished(true)
    } else {
      setIndex(prevIndex => prevIndex + 1);
      setDisplayChunk(() => list[index + 1].join(' '));
    }
  }

  function back() {
    if (index === 0) {
      return;
    } else {
      setIndex(prevIndex => prevIndex - 1);
      setDisplayChunk(() => list[index - 1].join(' '));
    }
  }
  
  function restart() {
    setIndex(0);
    setDisplayChunk(() => list[0].join(' '));
  }

  return { displayChunk, back, forward, restart, finished };
}
