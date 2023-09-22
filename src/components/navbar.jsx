import { Link } from "react-router-dom"
import { logo } from "../constants/logo"

const Navbar = () => {
  return (
  <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
    <Link to={'/'}>
        <img src={logo} alt="logo" width={150} />
    </Link>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <Link  className="me-3 py-2 link-body-emphasis text-decoration-none"to={'/register'}>
        Register
      </Link>
      <Link  className="me-3 py-2 link-body-emphasis text-decoration-none"to={'/login'}>
        Login
      </Link>
    </nav>
  </div>
  )
}

export default Navbar