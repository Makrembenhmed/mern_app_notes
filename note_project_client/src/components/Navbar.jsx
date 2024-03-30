import React from 'react'
import {  Link } from 'react-router-dom'
import { useAuth } from '../Context/auth'


const Navbar = () => {
    const {user,logOutUser,email,} =useAuth()
    
    return (

      
        
        <nav className="flex justify-center items-center gap-4 py-4 bg-blue-500 text-white text-xl text-decoration-none  rounded-es-3xl rounded-ee-3xl"> 
            {user?(
                <>
                
                <Link to='/'  className='text-white text-decoration-none ml-10'>Home</Link>
                <Link to='/notes' className='text-white text-decoration-none'>Notes</Link>
                <Link to='/produits'className='text-white text-decoration-none'>Store</Link>
                <Link to='/about'className='text-white text-decoration-none'>About</Link>
                
                
                <div className="flex justify-center items-center gap-4 ml-auto ">
                <button onClick={logOutUser}className=' text-warning ml-auto'>Logout</button>
            <span className='text-sm text-gray-100 hover:text-white'>{email}</span>
            </div>

                </>
            ):(
            
            <>
            <Link to='/'className='text-white text-decoration-none'>Home</Link>
            
            <Link to='/register' className='text-white text-decoration-none'>Register</Link>
            <Link to='login'className='text-white text-decoration-none'>Login</Link>
            </>
            )
            }


        </nav>
    )
}

export default Navbar