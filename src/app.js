import {Routes, Route } from "react-router-dom"
import { Login, Main, Navbar, Register } from "./components"
import { useEffect } from "react"
import AuthService from "./service/auth"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "./slice/authSlice"
import { getItem } from "./helpers/persistent-localstorage"


const App = () => {
  const dispatch = useDispatch()
  const setUser = async()=>{
    try {
      const data = await AuthService.getUserData()
      dispatch(signUserSuccess(data.data.user))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const token = getItem('token')    
    if(token){
      setUser()
    }
  }, [])

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>  
    </div>
  )
}

export default App