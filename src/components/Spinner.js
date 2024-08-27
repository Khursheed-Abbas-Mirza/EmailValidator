import React from 'react'
import Load from './load.gif'
const Spinner = () => {
  return (
    <div>
      <img src={Load} alt='loading' style={{height:"100px", width:"100px"}}/>
    </div>
  )
}

export default Spinner
