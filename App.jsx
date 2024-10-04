import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Form from './components/Form'
import Signup2 from './components/Signup2'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import File from './components/File'
import Api from './components/Api'
import Pokemon from './components/Pokemon'
import Grid  from './components/Grid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WELCOME</h1>
      <Navbar />
      <Routes>
       
        <Route path='/log1' element={<Signup />}></Route>
        <Route path='/log2' element={<Signup2 />}></Route>
        <Route path='/log3' element={<Form />}></Route>
        <Route path='/s' element={<Statebasics />}></Route>
        <Route path='/c' element={<Counter />}></Route>
        <Route path='/f' element={<File />}></Route>
        <Route path='/a' element={<Api />}></Route>
        <Route path='/p' element={<Pokemon />}></Route>
        <Route path='/g' element={<Grid />}></Route>
      </Routes>
     
      
    
    </>
  )
}

export default App
