import { Link, useNavigate } from "react-router-dom"
import { logo } from "../constants/logo"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../helpers/persistent-localstorage"
import { logOutUser } from "../slice/authSlice"

const Navbar = () => {
  const {loggedIn, user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOutHandler = ()=>{
    removeItem('token')
    dispatch(logOutUser())
    navigate('/register')
  }

  return (
  <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
    <Link to={'/'}>
        <img src={logo} alt="logo" width={150} />
    </Link>
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      {loggedIn ? (
        <>
          <p className="m-0 me-3 py-2 link-body-emphasis" >{user.username}</p>
          <Link  className="me-3 py-2 link-body-emphasis text-decoration-none"to={'/create-article'}>
            Create
          </Link>
          <button className="btn btn-outline-dark" onClick={logOutHandler} >log out</button>
        </>
      )
      : 
      (<>
        <Link  className="me-3 py-2 link-body-emphasis text-decoration-none"to={'/register'}>
          Register
        </Link>
        <Link  className="me-3 py-2 link-body-emphasis text-decoration-none"to={'/login'}>
          Login
        </Link>
      </>) }
    </nav>
  </div>
  )
}

export default Navbar