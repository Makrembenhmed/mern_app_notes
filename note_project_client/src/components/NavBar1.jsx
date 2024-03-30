import React from 'react';
import './navbar.css'
import logo_light from '../assets/logo.jpg'
import logo_dark from '../assets/logo_dark.jpg'
import search_light from '../assets/search-w.png'
import search_dark from '../assets/search-b.png'
import toogle_light from '../assets/night.png'
import toogle_dark from '../assets/day.png'
import {  Link } from 'react-router-dom'
import { useAuth } from '../Context/auth'

const NavBar1 = ({theme,setTheme,langue,setLangue}) => {
    const {user,logOutUser,email} =useAuth()

    const toggle_mode =()=>{
        theme=='light'? setTheme('dark'):setTheme('light')

    }
    /*const change_langue =()=>{
        langue=='English'? setLangue('English'):setTheme('light')

    }*/

    return (
        <div className='navbar'>
            <img src={theme=='light'? logo_dark : logo_dark } alt="" className='logo' />
            {user?(
            <ul>
                <li><Link to='/'  >Home</Link></li>
                <li><Link to='/notes' >Notes</Link></li>
                <li><Link to='/produits'>Store</Link></li>
                <li><Link to='/about'>About</Link></li>
                
                <li><button onClick={logOutUser}>Logout</button></li>
            </ul>
                ):(
                <ul>
                <li><Link to='/'  >Home</Link></li>
                <li><Link to='/notes' >Notes</Link></li>
                <li><Link to='/produits'>Store</Link></li>
                <li><Link to='/about'>About</Link></li>
                
                <li><Link to='login'>Login</Link></li>
                <li> <Link to='/register'>Register</Link></li>
                
            </ul>)}
            
            
            <div className='searchbox'>
                <input type="text" placeholder='search'  />
                <img  src={theme=='light'?search_light : search_dark } alt="" />
            </div>
            
            <div className='langue_menu'>
                <div className='selected_lang'>
                    {langue}
                </div>
                <ul>
                    <li>
                        <a className='us' href='#' onClick={()=>{setLangue('English')}}>English</a>
                    </li>
                    
                    <li>
                        <a className='fr' href='#' onClick={()=>{setLangue('French')}}>French</a>
                    </li>
                    
                    <li>
                        <a className='ae' href='#' onClick={()=>{setLangue('Arabe')}}>Arabe</a>
                    </li>
                    
                    <li>
                        <a className='de' href='#' onClick={()=>{setLangue('German')}}>German</a>
                    </li>
                </ul>

            </div>
 
                <img onClick={()=>{toggle_mode()}} src={theme=='light'? toogle_light : toogle_dark  } alt="" className='toggle_icon' />
            
        </div>
    );
}

export default NavBar1;
