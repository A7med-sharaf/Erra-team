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
          <Route path='/' element={<h1 className='text-center'>welcome</h1>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup></Signup>} />

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}
