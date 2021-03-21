import React, { useState } from 'react'
// import axios from 'axios'

const Search = ({ setQuery }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const handleSubmit = () => {
    setQuery(value)
  }

  return (
    <div className='search-form'>
      <input className='search-form__input' value={value} onChange={handleChange} placeholder='Search for any IP'/>
      <button className='search-form__button' type='submit' onClick={handleSubmit}></button>
    </div>
  )
}

export default Search