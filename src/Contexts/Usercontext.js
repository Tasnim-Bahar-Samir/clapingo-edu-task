import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config'
export const authProvider = createContext()

const auth = getAuth(app)
const UserContext = ({children}) => {
    const[user,setUser] = useState('')
   
    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userLogOut = ()=>{
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    
    const userInfo = {user,createUser,userLogin,userLogOut}
  return (
    <authProvider.Provider value={userInfo}>
        {children}
    </authProvider.Provider>
  )
}

export default UserContext