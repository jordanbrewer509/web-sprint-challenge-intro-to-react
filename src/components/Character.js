// Write your Character component here

import react, { useState, useEffect } from 'react';
import axios from 'axios';
// cute lil box 

function Character() {

    const [arr, getArr] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
            getArr(res.data.results);
        })
        .catch(err => console.log(err))
    }, []);
 
  return arr;
  }

export default Character;