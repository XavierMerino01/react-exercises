import '../styles/Card.css'
import {useState, useEffect} from 'react';

function Card({pokemonName, onClick}){
    
    const [imageUrl, setImageUrl] = useState('');


    useEffect(() =>{
        const fetchPokemonImage = async () =>{
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
                const data = await response.json();
                setImageUrl(data.sprites.front_default);
            }
            catch(error){
                console.error("Error fetching image:", error);
            }
        }

        fetchPokemonImage();
    }, [pokemonName])


    const handleClick = () => {
        onClick(pokemonName); // Call the onClick function passed from App
    };

    return (
        <>
            <div className="card" onClick={handleClick}>
                <div className="card-image">
                   {imageUrl && <img src={imageUrl} alt={pokemonName} />}
                    <p>{pokemonName}</p>
                </div>
            </div>
        </>
    )
}

export default Card