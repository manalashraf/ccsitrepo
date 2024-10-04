import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, Setcount] = useState(0)
    const handlecount = (b) => {
        console.log(b.target.value)
        Setcount(b.target.value)
    }
    const handlecount2 = () => {
        Setcount(count+1)
    }
    const handlecount3 = () => {
        Setcount(count-1)
    }
    
  return (
      <div>
          <h1>the count is {count}</h1>
          <Button variant="outlined" color="black" onClick={handlecount3} >-</Button>
          &nbsp;
          <Button variant="outlined" color="black" onClick={handlecount2}>+</Button>
          
    </div>
  )
}

export default Counter
