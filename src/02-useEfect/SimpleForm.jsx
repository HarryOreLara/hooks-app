import { useState, useEffect } from "react"
import Message from "./Message";

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Harry2',
    email: 'harry@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value })
    setFormState({
      ...formState,
      [name]: value
    })
  }



  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        autoComplete="off"
        id="1"
        name="username"
        value={username}
        onChange={onInputChange}
      ></input>

      <input
        type="email"
        className="form-control mt-4"
        placeholder="example@google.com"
        autoComplete="off"
        name="email"
        id="2"
        value={email}
        onChange={onInputChange}
      ></input>


      {
        username === 'Harry' && <Message />
      }


    </>
  )
}

export default SimpleForm
