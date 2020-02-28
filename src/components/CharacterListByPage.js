import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard'
import { useParams } from "react-router-dom";
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export default function CharacterListByPage(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const {page}=useParams();
 

  useEffect(() => {
    Axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => {
      console.log('page data fetched successfully', response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('error in fetching page data', error);
    })
  }, [page])

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
