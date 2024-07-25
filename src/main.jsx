import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { fireContext } from './context/fireContex.jsx'
import  { auth,getProducts,login,logout,signup, uploadimg, viewProduct } from './firebase/firebaseConfig.js'
import Context from './context/fireContex.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <fireContext.Provider value={{auth,signup,login,logout,uploadimg,getProducts,viewProduct}}>
        <BrowserRouter >
        <Context>
            <App /> 
        </Context>
        </BrowserRouter>
    </fireContext.Provider>
  </React.StrictMode>
)
