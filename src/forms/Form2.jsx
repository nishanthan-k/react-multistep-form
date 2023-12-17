import "./form.css"

const Form1 = () => {
  return (
    <form className="form">
      <label className="label" htmlFor="dob">
        <span>DOB : </span>
        <input
          type="date"
          autoFocus
          required
        />
      </label>
      <label className="label" htmlFor="yoe">
        <span>Experience : </span>
        <input
          type="number"
          autoFocus
          required
        />
      </label>
      <label className="label" htmlFor="phno">
        <span>Mobile : </span>
        <input
          type="text"
          autoFocus
          required
        />
      </label>
      <label className="label" htmlFor="company">
        <span>Company : </span>
        <input
          type="text"
          required
        />
      </label>
    </form>
  )
}

export default Form1