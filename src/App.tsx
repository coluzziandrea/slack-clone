import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<h1> Home </h1>} />
      </Routes>
    </div>
  );
}

export default App;
