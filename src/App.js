import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Home } from './component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
