import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Axios from "axios";
import CharacterCard from './CharacterCard'
import {Button} from 'reactstrap'

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${props.searchTerm}`)
    .then(response => {
      console.log('data fetched successfully', response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('error in fetching data', error);
    })
  }, [props.searchTerm]);


  return (
    <section className="character-list">
      {characters.map(char => {
        return <CharacterCard character={char} />
      })}
        <div className='nav'>
        <Button color='link'><Link to='/characters'>1</Link></Button>
        <Button color='link'><Link to='/characters/2'>2</Link></Button>
        <Button color='link'><Link to='/characters/3'>3</Link></Button>
        <Button color='link'><Link to='/characters/4'>4</Link></Button>
        </div>
    </section>
  );
}
