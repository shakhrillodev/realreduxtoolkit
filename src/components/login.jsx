import { useDispatch, useSelector } from "react-redux"
import { logo } from "../constants/logo"
import { Input } from "../ui"
import { useEffect, useState } from "react"
import { signUserStart, signUserFailure, signUserSuccess } from "../slice/authSlice"
import AuthService from "../service/auth"
import { AuthError } from "./"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isLoading} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loggedIn} = useSelector( state => state.auth )

  useEffect(()=>{
    if(loggedIn)
    navigate('/')
  }, [])


  const onLogin = async (e)=>{
    e.preventDefault()
    dispatch(signUserStart())
    try {
      const response = await AuthService.userLogin({email, password})
      dispatch(signUserSuccess(response.data.user))
      navigate('/')
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  return (
  <div className="text-center mt-5" >
    <form onSubmit={onLogin} className="form-signin w-25 mx-auto" >
      <img src={logo} alt="logo" width={80} />
      <h3 className="fw-normal my-2" >Please login</h3>
      <AuthError />
      <Input type="email" label={'email'} state={email} setState={setEmail} />
      <Input type="password" label={'password'} state={password} setState={setPassword} />
      <button type="submit" disabled={isLoading} className=" w-100 btn btn-primary btn-lg mt-2">
        {isLoading ? 'Loading...' : 'login'}
      </button>
    </form>    
  </div>
  )
}

export default Login