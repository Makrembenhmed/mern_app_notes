import React, { useEffect, useState } from 'react'
import Home from "./Pages/Home/Index"
import Register from "./Pages/Register/Index"
import Login from "./Pages/Login/Index"
import Navbar from './components/Navbar'
import { Routes, Route, Navigate} from "react-router-dom"
import PrivateRoute from './utils/PrivateRoute'
import Notes from './Pages/Notes/Index'
import { useAuth } from './Context/auth'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateNote from './Pages/createnote'
import UpdateNote from './Pages/updatenote/Index'
import Produit from "./produitPages/ttesProduits/index"
import CreateProduit  from  "./produitPages/createProduit"


import About from './Pages/About'
import Dashboard from './Pages/dashboard/dashboard'
import UpdateProduit from './produitPages/updateProduit/updateProduit'
import Navbar1 from './components/NavBar1'

const App = () => {

  const {user}=useAuth()
  const curent_theme=localStorage.getItem('curent_theme')
  const curent_langue=localStorage.getItem('curent_langue')
  const [theme,setTheme]= useState(curent_theme? curent_theme :'light')
  const [langue,setLangue]= useState(curent_langue? curent_langue :'Langue')

  useEffect(()=>{
    localStorage.setItem('curent_theme', theme)
  },[theme])
  useEffect(()=>{
    localStorage.setItem('curent_langue', langue)
  },[langue])
  return (
    <>
    
    <ToastContainer/>

    

    <div className={`container ${theme}`}>

    <Navbar1 theme={theme} setTheme={setTheme} langue={langue} setLangue={setLangue} />
    
    <Routes>
      <Route element={<PrivateRoute/>}> 
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/notes/create' element={<CreateNote/>}/>
      <Route path="/notes/update/:id" element={<UpdateNote />} />
      <Route path='/admin' element={< Dashboard/>}/>
      <Route path='/produit/create' element={< CreateProduit/>}/>
      <Route path="/produit/update/:id" element={<UpdateProduit />} />
      
      

      </Route>



    <Route path='/' element={<Home/>}/>
    <Route path='/produits' element={< Produit/>}/>
    <Route path='/about' element={<About/>}/>
    
      <Route path='/register' element={
      user? <Navigate to='/'/>:<Register/>
      }/>
      <Route path='/login' element={
        user? <Navigate to='/'/>:<Login/>
      }/>




    </Routes>
    
    
    </div>
    </>

  )
}

export default App
