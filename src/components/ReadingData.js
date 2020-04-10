import React, { useState, useReducer, useContext } from "react";
import reducer, { initialState } from '../reducers/reading-reducer'
import chunker from '../helpers/chunker';
import stringFilter from '../helpers/stringFilter'
import SpeedReader from "./SpeedReader";
import Button from "./Button";
import "./ReadingData.scss";

export const ReaderContext = React.createContext()

export default function ReadingData() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { rawData, readerData, readingSpeed, excludedWords, chunkSize, readingStatus } = state

  function startReading() {

    if (readingStatus) {
      dispatch({ type: "SET_READING_STATUS", value: false });

    } else {
      dispatch({ type: "SET_READING_STATUS", value: true });

      if (readerData.length === 0) {
        // removing unwanted words from rawData
        let cleansedData = stringFilter(rawData.split(' '), excludedWords.split(' '))
        
        console.log({cleansedData})
        
        // modified rawData is set to be passed to SpeedReader
        let chunkedData = chunker(cleansedData, chunkSize);
        dispatch({ type: "SET_READER_DATA", value: chunkedData });
      }
    }
  }

  return (
    <ReaderContext.Provider value={{ state, dispatch }}>
      <div className="reading-data">
        <div className="display-data">
          {readingStatus === true ? (
            <SpeedReader
              readerData={readerData}
              timeoutTime={(60000 / readingSpeed) * chunkSize}
            />
          ) : (
            <>
              <h1 className="speed-data-header">Speed Reading Text</h1>
              <textarea 
                onChange={e => dispatch({ type: "SET_RAW_DATA", value: e.target.value })} 
                value={rawData}
              >
              </textarea>
            </>
          )}
        </div>

        <div className="configurations">
          <section>
            <h1 className={readingStatus ? "setting" : null}>Reading Speed</h1>
            { readingStatus 
              ? <h1 className="info-card">{readingSpeed}</h1>
              : <input
                  type="text"
                  placeholder="eg. '800'"
                  onChange={e => dispatch({ type: "SET_READING_SPEED", value: Number(e.target.value) })} 
                  value={readingSpeed}
                />
            }
          </section>

          <section>
            <h1 className={readingStatus ? "setting" : null}>Excluded Words</h1>
            { readingStatus 
              ? <div className="info-card">{excludedWords}</div>
              : <input
                  type="text"
                  placeholder="eg. 'the it and'"
                  onChange={e => dispatch({ type: "SET_EXCLUDED_WORDS", value: e.target.value })} 
                  value={excludedWords}
                />
            }
          </section>

          <section>
            <h1 className={readingStatus ? "setting" : null}>Chunk Size</h1>
            { readingStatus 
              ? <h1 className="info-card">{chunkSize}</h1>
              : <input
                  type="text"
                  placeholder="eg. '3'"
                  onChange={e => dispatch({ type: "SET_CHUNK_SIZE", value: Number(e.target.value) })} 
                  value={chunkSize}
                />
            }
          </section>

        </div>
        {/* <button onClick={() => toggleReading()}>Start Reading</button> */}
        { !readingStatus ? <Button onClick={() => startReading()} /> : (
          <div className="instructions">
            <p><strong>r</strong> - restart</p>
            <p><strong>space</strong> - read/pause</p>
            <p><strong>n</strong> - new text</p>
            <p><strong>use ← →</strong> to skip back or ahead</p>
            <p><strong>use ↑ ↓</strong> to increase or decrease wpm x25</p>
          </div>
        )}

      </div>
    </ReaderContext.Provider>
  );
}
