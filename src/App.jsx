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
const Profile = lazy(()=>import("./pages/Profile"))
import Profile_home from './pages/Profile-home'
const Profile_password = lazy(()=>import('./pages/Profile-password'))
const Profile_email = lazy(()=>import('./pages/Profile-email'))
const Profile_subscriptions = lazy(()=>import('./pages/Profile-subscriptions'))
const Success = lazy(()=>import('./pages/payment-success'));
const Error = lazy(()=>import('./pages/payment-error'));
const Payment_details = lazy(()=>import('./pages/payment-details'));



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
            <Route path='/profile' element={
              <Suspense fallback='loading'>
                <Profile/>
              </Suspense>}>
                <Route index element={<Profile_home/>}/>

                <Route path='image' element={
                  <Suspense fallback='loading'>
                    <Profile_password/>
                  </Suspense>}
                />

                <Route path='email' element={
                   <Suspense fallback='loading'>
                    <Profile_email/>
                  </Suspense>}
                />

                <Route path='subscriptions' element={
                  <Suspense fallback='loading'>
                    <Profile_subscriptions/>
                 </Suspense>}
                />

            </Route>
            <Route path='/success' element={
              <Suspense fallback="loading...">
                <Success/>
              </Suspense>
            }/>
            <Route path='/error' element={
              <Suspense fallback="loading...">
                <Error/>
              </Suspense>
            }/>
            <Route path='/details' element={
              <Suspense fallback="loading...">
                <Payment_details/>
              </Suspense>
            }/>
          </Routes>
        </Hambar>
      </Searchbar>
    </BrowserRouter>
  )
}


export default App
