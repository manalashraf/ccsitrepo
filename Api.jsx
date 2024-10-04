import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
  var [user, setUser] = useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.data)
      setUser(response.data)
})
  return (
    <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>username</TableCell>
                        <TableCell>email</TableCell>
                       
                        
                          </TableRow>
                  </TableHead>
          <TableBody>
            {user.map((val) => {
              return (
                <TableRow>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  
                </TableRow>
              )
            })}
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Api
