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
              <div className='main'>
                <Header />
                <Home />
              </div>
            </>  
          }
        />
        <Route
          path='/counter'
          element={
            <>
              <div className='main'>
                <Header />
                <Counter />
              </div>
            </>
          }
        />
        <Route
          path='/about'
          element={
            <>
            <div className='main'>
              <Header />
              <About />
            </div>
            </>
          }
        />
        <Route
          path='/calculator'
          element={
            <>
              <div className='main'>
                <Header />
                <Calculator />
              </div>
            </>
          }
        />
      </Routes >
    </>
  )
}

export default App
