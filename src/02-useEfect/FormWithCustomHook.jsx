import { useState } from "react"
import useForm from "../hooks/useForm"

const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });

  const {username, email, password} = formState;


  return (
    <>
      <h1>Formulario con Custom Hook</h1>
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

      <input
        type="password"
        className="form-control mt-4"
        placeholder="Contraseña"
        autoComplete="off"
        name="password"
        id="3"
        value={password}
        onChange={onInputChange}
      ></input>

      <button 
      className="btn btn-primary mt-3"
      onClick={onResetForm}
      >Borrar</button>
    </>
  )
}

export default FormWithCustomHook
