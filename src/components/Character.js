// Write your Character component here

import React from 'react';
//import axios from 'axios';
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

    return (
            <h2>{character}</h2>
    )
}
export default Character;