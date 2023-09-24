import { useCallback } from "react";
import { useSelector } from "react-redux"

const AuthError = () => {
  const {errors} = useSelector(store => store.auth)
  const errorMsg = useCallback(()=>{
    return Object.keys(errors).map(msg =>{
        return `${msg} - ${errors[msg]}`
    })
  }, [errors])

  return (
    errors !== null && errorMsg().map(item => (
        <div className="alert alert-danger" role="alert" key={item} >
            {item}
        </div>
    ))
    )
}

export default AuthError