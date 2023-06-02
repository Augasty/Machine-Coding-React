import React from 'react'
import { Route, Routes } from 'react-router'
import File_struct from '../File-struct/File_struct'
import Home from './Home'
import APIApp from '../API-calling/APIApp'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/file_structure' element={<File_struct />} />
        
        <Route path='/api_calling' element={<APIApp/>} />
        <Route path='/' element={<Home />} />
      </Routes>
      </div>
  )
}

export default Routing