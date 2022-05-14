import React from 'react'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../home/Home'
import Game from '../ingame/Game'
export default function Navigation() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Game" element={<Game />} />
        </Routes>
    </Router>
  )
}
