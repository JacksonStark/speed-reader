import React from 'react';
import './App.css';
import ReadingData from './components/ReadingData.js';
import NavBar from './components/NavBar.js';

function App() {

  return (
    <div className="App">

      <NavBar />

      <ReadingData />

    </div>
  );
}

export default App;