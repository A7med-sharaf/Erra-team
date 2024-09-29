import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './componets/login/Login'
import Signup from './componets/signup/Signup'

export default function 
() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route  index element={<Login />} />
            <Route path='home' element={<h1>home page</h1>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='*' element={<h1>page 404</h1>} />
          </Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
