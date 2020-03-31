import React, { useEffect, useContext } from 'react'
import { ReaderContext } from './ReadingData'
import './SpeedReader.scss'
import useVisualMode from '../hooks/useVisualMode.js';
import useKeyPress from '../hooks/useKeyPress.js';



export default function SpeedReader({ trimmedData, readingSpeed, chunkSize, setReading }) {
  const { displayChunk, forward, back, finished } = useVisualMode(trimmedData)
  const { pausePress, backPress, forwardPress, setBackPress, setForwardPress } = useKeyPress()
  const { state, dispatch } = useContext(ReaderContext);

  
  // runs every render, where it'll take off the first five words
  useEffect(() => {
    
    // amount of time for each word, then multiply it by chunkSize for our timeoutTime
    let wordTime = 60000 / Number(readingSpeed);
    let timeoutTime = chunkSize * wordTime;
    let timeout;
    
    if (finished) {
      setTimeout(() => dispatch({ type: "SET_READING_STATUS", value: false }), timeoutTime)
    }

    if (pausePress) {
      console.log("in SpeedReader.js pausePress IF")
      // if reading is paused allow forward and back (time-travel) functionality
      if (backPress) {
        back();
        setBackPress(false);
      }
      if (forwardPress) {
        forward();
        setForwardPress(false);
      }

    } else {
      // else continue with speed reading timeouts
      timeout = setTimeout(() => {
        forward()
      }, timeoutTime);
    }

    return () => clearTimeout(timeout)

  })


  return (
    <div className="display-words">
      {displayChunk}
    </div>
  )
}
