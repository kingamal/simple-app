import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import Home from './components/Home'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'
import Calculator from './components/Calculator'


function App() {

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <Home />
            </>  
          }
        />
        <Route
          path='/counter'
          element={
            <>
              <Header />
              <Counter />
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
        <Route
          path='/calculator'
          element={
            <>
              <Header />
              <Calculator />
            </>
          }
        />
      </Routes >
    </>
  )
}

export default App
