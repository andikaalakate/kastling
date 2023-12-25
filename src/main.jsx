import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar.jsx'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
