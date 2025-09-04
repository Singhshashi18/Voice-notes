import React, { useState } from 'react';
import Recorder from './Recorder';

function App() {
  const [recordings, setRecordings] = useState([]);

  const addRecording = (blobUrl) => {
    setRecordings([...recordings, blobUrl]);
  };

  const deleteRecording = (index) => {
    const updated = [...recordings];
    updated.splice(index, 1);
    setRecordings(updated);
  };

  return (
    <div className="app">
      <h1>🎙️ Voice Notes</h1>
      <Recorder onSave={addRecording} />
      <ul>
        {recordings.map((url, i) => (
          <li key={i}>
            <audio controls src={url}></audio>
            <button onClick={() => deleteRecording(i)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
