import React from 'react'
import { Route, Routes } from 'react-router'
import File_struct from '../File-struct/File_struct'
import Home from './Home'
import APIApp from '../API-calling/APIApp'
import Debounce from '../Debounce-search/Debounce'
import Rating from '../Star-rating/Rating'
import ModalHome from '../Modal/ModalHome'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/file-structure' element={<File_struct />} />
        
        <Route path='/api-calling' element={<APIApp/>} />
        <Route path='/debounce-search' element={<Debounce/>} />
        <Route path='/star-rating' element={<Rating value={2}/>} />
        <Route path='/modal' element={<ModalHome/>} />

      <Route path='/' element={<Home />} />
      </Routes>
      </div>
  )
}

export default Routing
