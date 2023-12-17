import "./form.css"

const Form1 = () => {
  return (
    <form className="form">
      <label className="label" htmlFor="role">
        <span>Role : </span>
        <input
          type="text"
          required
        />
      </label>
      <label className="label" htmlFor="skill">
        <span>Skill : </span>
        <input
          type="text"
          required
        />
      </label>
      <label className="label" htmlFor="github">
        <span>Github  : </span>
        <input
          type="email"
          required
        />
      </label>
      <label className="label" htmlFor="pass">
        <span>Password : </span>
        <input
          type="password"
          required
        />
      </label>
    </form>
  )
}

export default Form1