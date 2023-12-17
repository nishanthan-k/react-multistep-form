import { useState } from "react"
import "./form.css"

const Form1 = () => {
  const [formData1, setFormData1] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
  })

  return (
    <form className="form">
      <label className="label" htmlFor="fname">
        <span>First Name : </span>
        <input
          type="text"
          value={formData1.fname}
          onChange={e => setFormData1(prevData => ({...prevData, fname:e.target.value}))}
          autoFocus
          required
        />
      </label>
      <label className="label" htmlFor="lname">
        <span>Last Name : </span>
        <input
          type="text"
          value={formData1.lname}
          onChange={e => setFormData1(prevData => ({...prevData, lname:e.target.value}))}
          required
        />
      </label>
      <label className="label" htmlFor="email">
        <span>Email Id : </span>
        <input
          type="email"
          value={formData1.email}
          onChange={e => setFormData1(prevData => ({...prevData, email:e.target.value}))}
          required
        />
      </label>
      <label className="label" htmlFor="pass">
        <span>Password : </span>
        <input
          type="password"
          value={formData1.pass}
          onChange={e => setFormData1(prevData => ({...prevData, pass:e.target.value}))}
          required
        />
      </label>
    </form>
  )
}

export default Form1