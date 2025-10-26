import './App.css'
import React from 'react'
import Header from './components/Header'
import Add from './components/Add'
import './components/Header.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import './components/ResultCard.css'


function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </Router>
  )
}

export default App