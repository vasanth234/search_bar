import React from 'react'
import './searchlist.css'
export default function SearchResults({res}) {
    if(res===""){
        return <h2>results not found</h2>
    }
  return (
    <div className='result-list'>
     {
        res.map((res,id)=>{
            return <div key={id}>{res.name}</div>
        })
     }
    </div>
  )
}
