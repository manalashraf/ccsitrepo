import { TextField, Button } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  var [name, Setname] = useState("Manal")
  var[val,Setval]=useState()

    const HandleInput = (e) => {
        console.log(e.target.value)
        Setname(e.target.value)
    }
  const SubmitHandler = () => { 
    console.log("Clicked")
    Setval(name)
  }
    return (
      <div>
            <h1>hello {val}</h1>
        <TextField label="name" onChange={HandleInput} />
        <Button variant="outlined" color="black" onClick={SubmitHandler}>Click</Button>
    </div>
  )
}


export default Statebasics
