import React, { useEffect, useState } from "react"
import { Routes, Route, Router, Navigate } from 'react-router-dom'
import Login from "./component/login"
import Register from "./component/register"
import Profile from "./component/profile"
import { ToastContainer } from "react-toastify"
import { auth } from "./component/firebase/firebase"
import { onAuthStateChanged } from "firebase/auth"



function App() {

  const [user, setUser] = useState();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user)
    })
  })


  return (
    <div>
      <Routes> 
        <Route path="/" element={user?<Navigate to="/profile"/> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
