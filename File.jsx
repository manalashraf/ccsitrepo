import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const File = () => {
    var [nam, Setnam] = useState("")
    const Mana = () => {
        
        Setnam("Mana ")
    }
    const Yamz = ()=> {
        Setnam("Yamz")
    }
    const Drish = ()=> {
        Setnam("Drish")
    }
    const fazz = () => {
      Setnam("fazz")
    }
    useEffect(() => {
        Mana()
    },[])
    
  return (
      <div>
          <h1>Select anyone</h1>
          <Button variant="outlined" color="black" onClick={Mana}>Mana </Button>&nbsp;
          <Button variant="outlined" color="black" onClick={ fazz}>fazz </Button>&nbsp;
          <Button variant="outlined" color="black" onClick={Yamz}> Yamz</Button>&nbsp;
          <Button variant="outlined" color="black" onClick={Drish}> Drish</Button>
          <h3>hello { nam}</h3>
    </div>
  )
}

export default File
