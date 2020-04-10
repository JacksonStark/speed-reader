import { useState, useEffect } from "react";
import useVisualMode from '../hooks/useVisualMode.js';


export default function useKeyPress(readerData, timeoutTime, state, dispatch) {
  const { displayChunk, forward, back, restart, finished } = useVisualMode(readerData)
  const [ paused, setPaused ] = useState(false);
  const { readingSpeed } = state

  // runs on every render, where it'll take display the next set of five words
  useEffect(() => {
    
    function pressHandler({ key }) {
  
      if (key === " ") setPaused(!paused);
      if (key === "r") restart();
      // if reading paused... allow "time travel" controls
      if (key === "ArrowLeft") back();
      if (key === "ArrowRight") forward();

      if (key === "ArrowUp") {
        dispatch({ type: "SET_READING_SPEED", value: readingSpeed + 25 })
      }
      if (key === "ArrowDown") {
        dispatch({ type: "SET_READING_SPEED", value: readingSpeed - 25 })
      }
      if (key === "n") {
        setTimeout(() => dispatch({ type: "SET_READING_STATUS", value: false }))
      }
    }

    let timeout;

    if (finished) {
      setTimeout(() => dispatch({ type: "SET_READING_STATUS", value: false }), timeoutTime)
    }
    
    // continue with speed reading timeouts if not paused
    if (!paused) timeout = setTimeout(() => forward(), timeoutTime);

    window.addEventListener("keydown", pressHandler);

    return () => {
      window.removeEventListener("keydown", pressHandler);
      clearTimeout(timeout);
    }
  }); 

  return { displayChunk };
}