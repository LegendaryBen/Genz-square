import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Searchbar from './contexts/Searchbar'
import Hambar from './contexts/Hambar'


function App() {

  return (
    <BrowserRouter>
      <Searchbar>
        <Hambar>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Hambar>
      </Searchbar>
    </BrowserRouter>
  )
}


export default App
