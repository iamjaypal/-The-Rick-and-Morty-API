import React from 'react'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserProfile from './Components/UserProfile'
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/userprofile/:id' element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
