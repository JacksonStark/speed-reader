import React, { useEffect, useState } from 'react'
import './SpeedReader.scss'
import useVisualMode from '../hooks/useVisualMode.js';


export default function SpeedReader({ trimmedData, readingSpeed, chunkSize, setReading }) {
  const [displayData, setDisplayData] = useState(trimmedData)
  const [displayWords, setDisplayWords] = useState('')

  const {} = useVisualMode(trimmedData)
  
  // runs every render, where it'll take off the first five words
  useEffect(() => {
    
    // amount of time for each word, then multiply it by chunkSize for our timeoutTime
    let wordTime = 60000 / Number(readingSpeed);
    let timeoutTime = chunkSize * wordTime;
    
    // let data = displayData
    
    if (displayData.length === 0) {
      setTimeout(() => setReading(false), timeoutTime)
    }

    
    // setDisplayState to next five words...
    let timeout = setTimeout(() => {
      // grab first three words
      let chunkWords = displayData.slice(0, chunkSize);
      console.log({chunkWords})

      let remainingData = displayData <= chunkSize ? displayData : displayData.slice(chunkSize)
      setDisplayData(remainingData);
      setDisplayWords(chunkWords.join(' '));
    }, timeoutTime);

    return () => clearTimeout(timeout)

  })


  return (
    <div className="display-words">
      {displayWords}
    </div>
  )
}
