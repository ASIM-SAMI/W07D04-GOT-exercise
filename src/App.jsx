import Axios from 'axios'
import './index.css';
import { useState, useEffect } from 'react'
import {Character} from './components/Character'
import {House} from './components/House'






function App() {
  const [houses, setHouses] = useState([])
  const [characters, setCharacters] = useState([])

  let characterOneUrl = Axios.get(`https://api.got.show/api/show/characters/Jon Snow`)
  let characterTwoUrl = Axios.get(`https://api.got.show/api/show/characters/Tyrion Lannister`)
  let characterThreeUrl = Axios.get(`https://api.got.show/api/show/characters/Daenerys Targaryen`)
  let characterFoureUrl = Axios.get(`https://api.got.show/api/show/characters/Petyr Baelish`)
  let housesOneUrl = Axios.get(`https://api.got.show/api/show/houses/House Stark`)
  let housesTwoUrl = Axios.get(`https://api.got.show/api/show/houses/House Lannister`)
  let housesThreeUrl = Axios.get(`https://api.got.show/api/show/houses/House Targaryen`)
  let housesfoureUrl = Axios.get(`https://api.got.show/api/show/houses/House Baelish`)

   

  
  useEffect(() => {
    // effect

    Axios.all([characterOneUrl,characterTwoUrl,characterThreeUrl,characterFoureUrl]) 
    .then(Axios.spread((...responses) => {
      
      setCharacters(responses)
  
    })).catch(error => {
      console.err(error)
    })

    Axios.all([housesOneUrl,housesTwoUrl,housesThreeUrl,housesfoureUrl]) 
    .then(Axios.spread((...responses) => {

      
      setHouses(responses)
  
    })).catch(error => {
      console.err(error)
    })
    
  }, [])


   const allCharacters = characters.map((char)=>{

          return(
              <Character key={char.id} name={char.data.age.name} img={char.data.image} house={char.data.house}/>
          )
   }) 

   const allHouses = houses.map((house)=>{
    console.log(house)
    return(
        <House key={house.id} logo={house.data[0].logoURL} seat={house.data[0].seat[0]} />
    )
}) 
  return (
    <div>
      
    
      <div className="clear"></div>
      
      <h1>Characters</h1>
      {allCharacters}

      <h1>Houses</h1>
      {allHouses}
    </div>
  );
}

export default App;
