import React from 'react'
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


const App = () => {

  const {user}=useAuth()
  
  return (
    <>
    <ToastContainer/>

    <Navbar/>
    
    <Routes>
      <Route element={<PrivateRoute/>}> 
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/notes/create' element={<CreateNote/>}/>
      <Route path="/notes/update/:id" element={<UpdateNote />} />
      
      

      </Route>

    <Route path='/' element={<Home/>}/>
      <Route path='/register' element={
      user? <Navigate to='/'/>:<Register/>
      }/>
      <Route path='/login' element={
        user? <Navigate to='/'/>:<Login/>
      }/>

    </Routes>
    
    </>
  )
}

export default App
