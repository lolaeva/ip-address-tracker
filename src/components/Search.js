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
    <div>
      <input value={value} onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>go</button>
    </div>
  )
}

export default Search