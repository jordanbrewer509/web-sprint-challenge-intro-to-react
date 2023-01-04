import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import './App.css'
import axios from 'axios';

const App = () => { 

  const [ char, getChar ] = useState();

  useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
          getChar(res.data);
      })
      .catch(err => console.log(err))
  }, []);
  
if(char) {
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        <div className='container'>
          {char.map((element => {
            return <Character character={element.name}/>
          }))}
        </div>
      </div>
    );

  } else {

    return(
      <div/>
    )
  }
}
export default App; 
