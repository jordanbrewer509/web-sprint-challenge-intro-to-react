// Write your Character component here

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Character(id) {

    // name, birthyear, gender, homeworld

    const [name, getName] = useState("");
    const [birthYear, getBirthYear] = useState("");
    const [gender, getGender] = useState("");
    const [homeworld, getHomeworld] = useState("");



    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(re => {
            getName(re.data.results.name);
            getBirthYear(re.data.results.birth_year);
            getGender(re.data.results.gender);
        })
        .then(res => {
            axios.get(`${res.data.homeworld}`)
                .then(rs => {
                    getHomeworld(rs.data.name)
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }, []);
 
  return [ name, birthYear, gender, homeworld ];
  }

export default Character;