import React, { createContext, useContext, useEffect, useState } from 'react'
import {auth} from "../firebaseConfig"
import {createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut,sendPasswordResetEmail} from "firebase/auth"

const AuthContext= createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {

    const [currentUser,setCurrentUser]=useState(null)
    const [loading,setLoading]=useState(true)

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function signout(){
        return signOut(auth)
    }

    function signin(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function passwordReset(email){
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,user =>{
            setCurrentUser(user);
            setLoading(false)
            
        })
        
        return unsubscribe();
    },[])

    const value={
        currentUser,
        signup,
        signout,
        signin,
        passwordReset
    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
