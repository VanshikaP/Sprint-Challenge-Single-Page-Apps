import React from "react";

export default function SearchForm(props) {

  const handleChange = e =>{
    props.setSearchTerm(e.target.value);
  }
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor='search'>Search</label>
       <input type='text' id='search' name='search' placeholder='Search by name' onChange={handleChange}/>
     </form>
    </section>
  );
}
