import React from 'react'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
export default function Navigation() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}
