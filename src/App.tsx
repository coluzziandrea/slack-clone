import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<h1> Home </h1>} />
      </Routes>
    </div>
  );
}

export default App;
