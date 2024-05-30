import React from 'react'
import './App.css'
import { Searchbar } from './components/Searchbar'
import SearchResults from './components/SearchResults'
import {useState} from 'react'

const App = () => {
  const [res,setRes]=useState([])
  return (
    <div className='App'>
      <div className='search-bar-container'>
     <Searchbar setRes={setRes}/>
      <SearchResults res={res}/>
      </div>
    </div>
  )
}

export default App
