import React,{useEffect} from 'react'
import {Route,Routes, useNavigate} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Signup from './Components/Signup/signup'
import { Toaster ,toast} from 'sonner'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseConfig'
import { Authcontext } from './context/fireContex'
import { useContext } from 'react'
import Create from './Components/Createpost/Create'
import View from './Components/view/view'
import PostProduct from './context/PropostContext'
function App() {
const {user,setUser} = useContext(Authcontext)
const navigate =useNavigate()



  useEffect(() => {

    onAuthStateChanged(auth,async(user)=>{
      setUser(user)
     
    })
  }, [])

  return (
    <>
    <PostProduct>
        <Toaster position='top-right' richColors closeButton />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/signUp' element={<Signup/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/view' element={<View/>}></Route>
          </Routes>
    </PostProduct>
    
    </>

  )
}   

export default App
