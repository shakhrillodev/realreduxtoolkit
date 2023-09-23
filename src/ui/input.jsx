const Input = ({type = 'text', label, state, setState}) => {
  return (
    <div className="form-floating mt-2">
        <input type={type} className="form-control" id={label} placeholder={label} value={state} onChange={(e)=>setState(e.target.value)} />
        <label htmlFor={label} >
        {label}
        </label>
    </div>
  )
}

export default Input