import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail'

function App() {
  const [count, setCount] = useState(0)

  return (

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
      </Router>

  )
}

export default App
