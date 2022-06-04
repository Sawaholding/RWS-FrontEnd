import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, EditingForm } from './pages'
import './styles/Index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editform" element={<EditingForm />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
