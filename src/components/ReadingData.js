import React from "react";
import "./ReadingData.scss";

export default function ReadingData() {

  const [readingSpeed, setReadingSpeed] = useState(0)

  return (
    <div className="reading-data">
      <h1>Speed Reading Text</h1>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <h1>Reading Speed</h1>
      <input type="text" placeholder="eg. '800'" />

      <h1>Unwanted Words</h1>
      <input type="text" placeholder="eg. 'the it and'" />
    </div>
  );
}
