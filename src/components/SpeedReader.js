import React, { useEffect, useState } from 'react'


export default function SpeedReader({ trimmedData, readingSpeed, chunkSize }) {

  const [displayData, setDisplayData] = useState(trimmedData)
  const [displayWords, setDisplayWords] = useState('')
  

  // runs every render, where it'll take off the first five words
  useEffect(() => {

    // amount of time for each word
    let wordTime = Number(readingSpeed) / 60000;
    
    // adjust word time for chunking
    let timeoutTime = chunkSize * wordTime;

    let data = trimmedData

    // console.log({timeoutTime})
    // console.log(data)
    
    // setDisplayState to next five words...
    setTimeout(() => {
      let chunkWords = data.slice(0, chunkSize - 1);
      // console.log({chunkWords})
      setDisplayWords(data.slice(chunkWords - 1));
    }, timeoutTime);

  })


  return (
    <div>
      {displayWords}
    </div>
  )
}
