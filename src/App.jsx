import './App.css'
import { lazy,Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Searchbar from './contexts/Searchbar'
import Hambar from './contexts/Hambar'
const Magazine = lazy(()=> import("./pages/Magazine"));
const Login = lazy(()=> import("./pages/Login"));
const SignUp = lazy(()=> import("./pages/SignUp"));
const Trending = lazy(()=> import("./pages/Trending"));
const User = lazy(()=> import("./pages/User"));


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
            <Route path='/sign-up' element={
              <Suspense fallback="loading...">
                <SignUp/>
              </Suspense>
            }/>
            <Route path='/trending' element={
              <Suspense fallback="loading...">
                <Trending/>
              </Suspense>
            }/>
             <Route path='/user' element={
              <Suspense fallback="loading...">
                <User/>
              </Suspense>
            }/>
          </Routes>
        </Hambar>
      </Searchbar>
    </BrowserRouter>
  )
}


export default App
