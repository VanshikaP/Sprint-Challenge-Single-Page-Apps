import React from "react";
import { Route } from 'react-router-dom'
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import SearchForm from './components/SearchForm'
import CharacterList from './components/CharacterList'



export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Route exact path='/' component={WelcomePage}></Route>
      <Route exact path='/characters' component={CharacterList}></Route>
      {/* <Route exact path='/locations' component={LocationList}></Route> */}
    </main>
  );
}
