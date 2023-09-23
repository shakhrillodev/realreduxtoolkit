import { useState } from "react"
import { logo } from "../constants/logo"
import { Input } from "../ui"
const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="text-center mt-5" >
      <form className="form-signin w-25 mx-auto" >
        <img src={logo} alt="logo" width={80} />
        <h3 className="fw-normal my-2" >Please register</h3>
        <Input type="text" label={'username'} state={username} setState={setUsername} />
        <Input type="email" label={'email'} state={email} setState={setEmail} />
        <Input type="password" label={'password'} state={password} setState={setPassword} />
        <button type="submit" className=" w-100 btn btn-primary btn-lg mt-2">
          register
        </button>
      </form>    
    </div>
  )
}

export default Register