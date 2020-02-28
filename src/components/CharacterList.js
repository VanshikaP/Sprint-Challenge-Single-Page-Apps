import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
 
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log('data fetched successfully', response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('error in fetching data', error);
    })
  }, []);

  useEffect(() => {
    let results = characters.filter(char => char.name.toLowerCase().includes(props.searchTerm.toLowerCase()));
    setCharacters(results);
  }, [props.searchTerm])

  return (
    <section className="character-list">
      {characters.map(char => {
        return <CharacterCard character={char} />
      })}
    </section>
  );
}
