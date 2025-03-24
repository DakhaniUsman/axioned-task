import React from 'react'

const SearchBar = ({searchTerm,setSearchTerm}) => {
  return (
    <div>
        <input type="text" value={searchTerm} onChange={(event)=>setSearchTerm(event.target.value)} className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Want something??'/>
    </div>
  )
}

export default SearchBar