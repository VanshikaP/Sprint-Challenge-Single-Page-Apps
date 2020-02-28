import React from "react";
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

export default function SearchForm(props) {

  const handleChange = e =>{
    props.setSearchTerm(e.target.value);
  }

  const handleBack = e => {
    e.preventDefault();
    document.getElementById('search').value = '';
  } 
  return (
    <section className="search-form">
     <form>
       <label htmlFor='search'>Search</label>
       <input type='text' id='search' name='search' placeholder='Search by name' onChange={handleChange}/>
       <Button color='info' onClick={handleBack}><Link className='nav-link' to='/characters'>Back</Link></Button>
     </form>
    </section>
  );
}
