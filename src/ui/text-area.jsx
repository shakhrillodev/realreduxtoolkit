const TextArea = ({ label, state, setState, height = '80px'}) => {
    return (
    <div className="form-floating">
        <textarea className="form-control" defaultValue={state} onChange={e => setState(e.target.value)} placeholder={label} id={label} style={{ resize: "none", height: height}}></textarea>
        <label htmlFor={label}>{label}</label>
    </div>
    )
}
  
export default TextArea