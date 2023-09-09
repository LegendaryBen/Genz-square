import './App.css'
import { lazy,Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Searchbar from './contexts/Searchbar'
import Hambar from './contexts/Hambar'
const Magazine = lazy(()=> import("./pages/Magazine"));
const Login = lazy(()=> import("./pages/Login"));


function App() {

  return (
    <BrowserRouter>
      <Searchbar>
        <Hambar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/magazine' element={
              <Suspense fallback="loading...">
                <Magazine/>
              </Suspense>
            }/>
            <Route path='/login' element={
              <Suspense fallback="loading...">
                <Login/>
              </Suspense>
            }/>
          </Routes>
        </Hambar>
      </Searchbar>
    </BrowserRouter>
  )
}


export default App
