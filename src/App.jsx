import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route element={<NotFound/>} path='*' />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
