import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='app'>
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path='/' element={<h1> Home </h1>} />
        </Routes>
      </AppBody>
    </div>
  );
}

export default App;

const AppBody = styled.div``;
