// Write your Character component here

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';

export const CharImg = styled.img`
    margin: 10px;
    border: 5px solid black;
    background-color: skyblue;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: top;
`

export const CharDiv = styled.div`
display: flex;
align-items: center;
background-color: lightgray;
border-radius: 10px;
padding: 10px;
width: 800px;
justify-content: space-around; 
border-bottom: 2px solid white;
border-right: 2px solid white;
margin: 50px;
`

export const TextDiv = styled.div`
height: 50%;
`

function Character(props) {

    const {character} = props;
    const x = [`Luke Skywalker`, `C-3PO`, `R2-D2`, `Darth Vader`, `Leia Organa`, `Owen Lars`]
    const y = character.name.replace(/\s+/g, '') + '.jpg'
    // const [z,setz] = useState()

    // useEffect(() => {
    //     axios.get(`${character.homeworld}`)
    //     .then(res => {
    //         setz(res.data.name);
    //     })
    //     .catch(err => console.log(err))
    // }, []);

  return(
    
    <CharDiv className='characters'>
        {
            x.includes(character.name) ? <CharImg src={require('../pfp/'+y)}/> : <CharImg src=''/>
        }
        <TextDiv className='text'>
            <h2>{`${character.name}`} </h2>
            <p>{`${character.birth_year}`}</p>
            <p>{`${character.gender}`}</p>
            { /*
                z ? <p>{`${z}`}</p> : <p></p>
    */ } 
        </TextDiv>
    </CharDiv>
  )

}
export default Character;