import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Characters from './Characters';
import Houses from './Houses';

// jon snow
// Daenerys Targaryen
// Joffrey Baratheon
// Samwell Tarly
// https://thronesapi.com/api/v2/Characters
///https://api.got.show/api/show/characters/Joffrey%20Baratheon
// https://api.got.show/api/show/houses/House%20Tarly
let houseUrl = 'https://api.got.show/api/show/houses/'
const requestOne = axios.get('https://api.got.show/api/show/characters/Jon%20Snow');
const requestTwo = axios.get('https://api.got.show/api/show/characters/Tyrion Lannister');
const requestThree = axios.get('https://api.got.show/api/show/characters/Daenerys%20Targaryen');
const requestFour = axios.get('https://api.got.show/api/show/characters/Petyr Baelish');

function App() {
  const [houses, setHouses] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // effect
    axios.all([requestOne, requestTwo, requestThree ,requestFour]).then((responses) => {
      console.log(responses)
      setCharacters(responses)
      axios.all(responses.map(ele =>axios.get(houseUrl + ele.data.house) ))
      .then(res => setHouses(res))
    }).catch(errors => {
    })
    
  }, [])


  let allsetCharacters = characters.map(ele => <Characters  house={ele.data.house} image={ele.data.image} name ={ele.data.name}/>)
  let allHouses = houses.map(ele => <Houses  house={ele.data[0].name} image={ele.data[0].logoURL} seat ={ele.data[0].seat[0]} />)

  return (
    <div>
      <h1>Characters</h1>
      {allsetCharacters}
      <div className="clear"></div>
      <h1>Houses</h1>
      {allHouses}
    </div>
  );
}

export default App;
