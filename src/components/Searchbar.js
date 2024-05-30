/*import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './Search.css';
import { useState } from 'react';

const Searchbar = () => {
  const [data, setData] = useState('')

  //for now we needs to give the inputs as per that 
  // it should fetch the data accordingly
  //we have API taken from jsonplaceholder.typicode.com
  //Now to fetch we do create one fucntion and add ti
  const fetchaway = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((json) => {
      console.log(json)
    });

    const handchange = (value) => {
      setData(value);
      fetchaway(value);
    }
    return (
      <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input placeholder='type names' value={data} onChange={(e) => handchange(e.target.value)} />
      </div>
    )
  }
}

export default Searchbar*/

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./Search.css";

export const Searchbar = ({setRes}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
      const result=json.filter((use)=>{
        return value && use && use.username && use.username.toLowerCase().includes(value)
      })

     setRes(result);
   
       
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
