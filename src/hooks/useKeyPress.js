import { useState, useEffect } from "react";

export default function useKeyPress() {
  const [pausePress, setPausePress] = useState(false);
  const [backPress, setBackPress] = useState(false);
  const [forwardPress, setForwardPress] = useState(false);

  function pressHandler({ key }) {

    console.log({key, pausePress, backPress})

    if (key === " ") {
      setPausePress(!pausePress);
    } 
    
    if (pausePress && key === "ArrowLeft") {
      setBackPress(true);
    } 
    
    if (pausePress && key === "ArrowRight") {
      setForwardPress(true);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", pressHandler);

    return () => window.removeEventListener("keydown", pressHandler);
  }); // Empty array ensures that effect is only run on mount and unmount

  return { pausePress, backPress, setBackPress, forwardPress, setForwardPress };
}
