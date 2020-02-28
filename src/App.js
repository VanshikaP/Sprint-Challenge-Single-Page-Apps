import React, {useState, useEffect} from "react";
import { Route, Link } from 'react-router-dom'
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import SearchForm from './components/SearchForm'
import CharacterList from './components/CharacterList'
import CharacterListByPage from './components/CharacterListByPage'
import {Button} from 'reactstrap';
import Axios from "axios";



export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <Header />
      <div className='nav'>
        <SearchForm setSearchTerm={setSearchTerm}/>
        <div className='buttons'>
          <Button color='primary'><Link className='nav-link' to='/'>Home</Link></Button>
          <Button color='primary'><Link className='nav-link' to='/characters'>Characters</Link></Button>
        </div>
      </div>
      
      <Route exact path='/' component={WelcomePage}></Route>
      <Route exact path='/characters'>
        <CharacterList searchTerm={searchTerm}/>
      </Route>
      {/* <Route exact path='/locations' component={LocationList}></Route> */}
      <Route exact path='/characters/:page'>
        <CharacterListByPage />
      </Route>
    </main>
  );
}
