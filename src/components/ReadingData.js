import React, { useState, useReducer, useContext } from "react";
import reducer, { initialState } from '../reducers/app-reducer'
import chunker from '../helpers/chunker';
import SpeedReader from "./SpeedReader";
import "./ReadingData.scss";

export const ReaderContext = React.createContext()

export default function ReadingData() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { rawData, readerData, readingSpeed, excludedWords, chunkSize, readingStatus } = state

  function startReading() {

    // removing unwanted words from speedData
    let cleansedData = rawData.replace(excludedWords, '').split(' ');
    let chunkedData = chunker(cleansedData, chunkSize);

    // modified speedData is set to be passed to SpeedReader

    // setReaderData(chunkedData);
    dispatch({ type: "SET_READER_DATA", value: chunkedData });
    // setReading(true);
    dispatch({ type: "SET_READING_STATUS", value: true });
  }

  return (
    <ReaderContext.Provider value={{ state, dispatch }}>
      <div className="reading-data">
        <div className="display-data">
          {readingStatus === true ? (
            <SpeedReader
              filteredData={readerData}
              readingSpeed={readingSpeed}
              chunkSize={chunkSize}
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
            <h1>Reading Speed</h1>
            <input
              type="text"
              placeholder="eg. '800'"
              onChange={e => dispatch({ type: "SET_READING_SPEED", value: e.target.value })} 
              value={readingSpeed}
            />
          </section>

          <section>
            <h1>Excluded Words</h1>
            <input
              type="text"
              placeholder="eg. 'the it and'"
              onChange={e => dispatch({ type: "SET_EXCLUDED_WORDS", value: e.target.value })} 
              value={excludedWords}
            />
          </section>

          <section>
            <h1>Chunk Size</h1>
            <input
              type="text"
              placeholder="eg. '3'"
              onChange={e => dispatch({ type: "SET_CHUNK_SIZE", value: e.target.value })} 
              value={chunkSize}
            />
          </section>
        </div>

        <button onClick={() => startReading()}>Start Reading</button>
      </div>
    </ReaderContext.Provider>
  );
}
