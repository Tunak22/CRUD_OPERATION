import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'
import Update from './Update'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/read/:Id" element={<Read/>}/>
      <Route path="/update/:Id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App