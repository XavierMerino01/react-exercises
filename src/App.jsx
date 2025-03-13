import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import './index.css'

let pokemons = ["Pikachu", "Onix", "Bulbasaur", "Blastoise", "Eevee", "Tyranitar", "Arceus", "Celebi", "Infernape", "Staraptor"];

function App() {
  const [count, setCount] = useState(0)
  const [clickedList, setClickedList] = useState([]);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() =>{
    pokemons = shuffleArray(pokemons);
  },[count]);

  function shuffleArray(array) {
    const newArray = [...array]; // Create a copy to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  }

  const handleClick = (pokemonName) => {
    if (clickedList.includes(pokemonName)) {
      console.log("You lose");
      if(count > maxScore){
        setMaxScore(count);
      }
      setCount(0);
      setClickedList([]);
    } else {
      setClickedList([...clickedList, pokemonName]);
      setCount(count + 1);
      console.log(count);
    }
  };

  return (
    <>
    <div className='cardGrid'>
      {pokemons.map((pokemon) => (
        <Card key={pokemon} pokemonName={pokemon} onClick={handleClick} />
      ))}
    </div>
    <div className='score'>
      <p>Current Score: {count}</p>
      <p>Max. Score: {maxScore}</p>
    </div>
    </>
  )
}

export default App
