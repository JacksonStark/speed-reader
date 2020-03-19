import React, { useState } from "react";
import "./ReadingData.scss";

export default function ReadingData() {
  const [speedData, setSpeedData] = useState("");
  const [readingSpeed, setReadingSpeed] = useState(0);
  const [excludedWords, setExcludedWords] = useState("");
  const [chunkSize, setChunkSize] = useState(0);

  function startReading() {
    // remove words from speedData
    // set interval by => words.length / (readingSpeed)
  }

  return (
    <div className="reading-data">
      <h1 className="speed-data-header">Speed Reading Text</h1>
      <textarea onChange={e => setSpeedData(e.target.value)}></textarea>

      <div className="configurations">
        <section>
          <h1>Reading Speed</h1>
          <input
            type="text"
            placeholder="eg. '800'"
            onChange={e => setReadingSpeed(e.target.value)}
          />
        </section>

        <section>
          <h1>Excluded Words</h1>
          <input
            type="text"
            placeholder="eg. 'the it and'"
            onChange={e => setExcludedWords(e.target.value)}
          />
        </section>

        <section>
          <h1>Chunk Size</h1>
          <input
            type="text"
            placeholder="eg. '3'"
            onChange={e => setChunkSize(e.target.value)}
          />
        </section>
      </div>

      <button onClick={() => startReading()}>Start Reading</button>
    </div>
  );
}
