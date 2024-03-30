
import { createContext, useState, useContext,useEffect} from 'react';
import { toast } from "react-toastify";

const AuthContext =createContext()

export const AuthProvider =({children})=>{

    const [user,setUser]=useState(localStorage.getItem("token") || null);

    const[email , setEmail]=useState(localStorage.getItem("email") ||'')
    useEffect(() => {
    const token = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    if (token) {
    setUser(token);
   
    if (storedEmail) {
        setEmail(storedEmail);}
    
    }
}, []);

    // userForm : mail & password
    const loginUser =async(userData)=>{

        
        const res = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/login`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
            }
        );
        const data = await res.json();
        
        if(data.success){
            setUser(data.token)
            setEmail(data.email)
            localStorage.setItem("email", data.email);
            // save to local storage
        localStorage.setItem("token", data.token);
            toast.success("user loged with successfully")
        }
        if(!data.success){
            toast.error(data.error);
        }
    


    }
    const registerUser =async(userData)=>{
        const res = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/register`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
            }
        );
        const data = await res.json();
        
        if(data.success){
            setUser(data.token)
            setEmail(data.email)
            // save to local storage
        localStorage.setItem("token", data.token);
        
        localStorage.setItem("email", data.email);
            toast.success("user registred with successfully")
        }
        if(!data.success){
            toast.error(data.error);
        }
    


    }
    const logOutUser =async()=>{

        setUser(null);
        setEmail('')
    localStorage.removeItem("token");
    toast.success("Logout successful");

    }
    const contextData = {
        user,
        email,
        loginUser,
        registerUser,
        logOutUser,
     
    }
    

    
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>

    )
}


export const  useAuth =()=> useContext(AuthContext);
export default AuthContext