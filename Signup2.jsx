import React from 'react'
import {Button, TextField } from '@mui/material'

const Signup2 = () => {
  return (
    <div>
          <h1>Signup2</h1>
          <TextField id="standard-basic" label="email" variant="standard" /><br/><br/>
          <TextField id="standard-basic" label="password" variant="standard" /><br/><br/>
          <Button variant="outlined" color="black" >Submit</Button>
      </div>
  )
}

export default Signup2
