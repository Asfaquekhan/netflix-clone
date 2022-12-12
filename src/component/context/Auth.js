import { createContext,useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
const AuthContext = createContext()

export function AuthProvider({children}){
    const [user,setuser]=useState({})
    function singUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(auth){
        return signOut(auth)
    }
    function recomend(item){
        return `https://api.themoviedb.org/3/movie/${item}?api_key=64ff6c5098cdafbe0dcb9398d4334f83&language=en-US`
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(curr)=>{
            setuser(curr)
        })
        return()=>{
            unsubscribe()
        }
    })
    return(
        <AuthContext.Provider value={{singUp,login,logOut,user,recomend}}>
            {children}
        </AuthContext.Provider>
    )
}
export function UserAuth(){
    return useContext(AuthContext)
}