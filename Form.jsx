import { Button } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div>
          <h1>Login </h1>
          
            <input type="text" name="" id=""
            placeholder='e-mail'/><br/><br/>
            <input type="password" name="" id=""
            placeholder='password'/><br/><br/>
            <Button variant="outlined" color="black">Submit</Button>
    </div>
  )
}

export default Form
