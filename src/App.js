import React, { useState, useEffect } from 'react';
import Character from './components/Character';

const App = () => {

  const characterArr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className='container'>
        <div className='box'>
          <img src=''/>
        </div>
      </div>
    </div>
  );
}

export default App;
