import React, { useContext } from 'react'
import { ReaderContext } from './ReadingData'
import './SpeedReader.scss'
import useKeyPress from '../hooks/useKeyPress.js';



export default function SpeedReader({ readerData, timeoutTime }) {
  const { state, dispatch } = useContext(ReaderContext);
  const { displayChunk } = useKeyPress(readerData, timeoutTime, state, dispatch)

  
  return (
    <div className="display-words">
      {displayChunk}
    </div>
  )
}
