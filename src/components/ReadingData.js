import React, { useState, useEffect } from "react";
import "./ReadingData.scss";
import SpeedReader from "./SpeedReader.js";

export default function ReadingData() {
  const [speedData, setSpeedData] = useState(
    "last night i went to the bar and found something fancy. i grabbed it and it turned out it was thousands of dollars."
  );
  const [readingSpeed, setReadingSpeed] = useState(100);
  const [excludedWords, setExcludedWords] = useState("the");
  const [chunkSize, setChunkSize] = useState(3);
  const [reading, setReading] = useState(false);

  function startReading() {

    // removing unwanted words from speedData
    let modifiedData = speedData.replace(excludedWords, "").split("");

    // modified speedData is set to be passed to SpeedReader
    setSpeedData(modifiedData);
    setReading(true);
  }

  return (
    <div className="reading-data">
      {reading === true ? (
        <SpeedReader
          trimmedData={speedData}
          readingSpeed={readingSpeed}
          chunkSize={chunkSize}
        />
      ) : (
        <>
          <h1 className="speed-data-header">Speed Reading Text</h1>
          <textarea onChange={e => setSpeedData(e.target.value)} value={speedData}></textarea>
        </>
      )}

      <div className="configurations">
        <section>
          <h1>Reading Speed</h1>
          <input
            type="text"
            placeholder="eg. '800'"
            onChange={e => setReadingSpeed(e.target.value)}
            value={100}
          />
        </section>

        <section>
          <h1>Excluded Words</h1>
          <input
            type="text"
            placeholder="eg. 'the it and'"
            onChange={e => setExcludedWords(e.target.value)}
            value="the"
          />
        </section>

        <section>
          <h1>Chunk Size</h1>
          <input
            type="text"
            placeholder="eg. '3'"
            onChange={e => setChunkSize(e.target.value)}
            value={3}
          />
        </section>
      </div>

      <button onClick={() => startReading()}>Start Reading</button>
    </div>
  );
}
