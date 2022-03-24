import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import ProductAdd from './ProductAdd'
function App() {

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<h1>home page</h1>}/>
         <Route path="add" element={<ProductAdd />}/>
      </Routes>
    </div>
  )
}

export default App
