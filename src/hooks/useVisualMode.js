import { useState } from "react";

export default function useVisualMode(initial) {
  const [index, setIndex] = useState([])
  const [chunk, setChunk] = useState(0);
  const [list, setList] = useState(initial);

  function forward() {
      setIndex(prevIndex => prevIndex + 1);
      setChunk(prevChunk => list[prevChunk + 1]);
  }

  function back() {
    setIndex(prevIndex => prevIndex + 1);
    setChunk(prevChunk => list[prevChunk + 1]);
  }

  return { index, chunk, back, forward };
}
