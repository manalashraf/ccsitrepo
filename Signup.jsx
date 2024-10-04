import { Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1>Signup</h1>
          <input type="text" name="" id=""
              placeholder='name' /><br /><br/>
          <input type="text" name="" id=""
              placeholder='email ' /><br /><br/>
          <input type="number" name="" id=""
              placeholder='phone number' /><br /><br/>
          <input type="password" name="" id=""
              placeholder='password' /><br/><br/>
          <Button variant="outlined" color="black">Submit</Button>
    </div>
  )
}

export default Signup
