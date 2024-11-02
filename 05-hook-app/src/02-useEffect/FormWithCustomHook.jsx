import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState;

  return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text" 
            name="username"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            name="email"
            className="form-control mt-2"
            placeholder="walter@gmail.com"
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password" 
            name="password"
            className="form-control mt-2"
            placeholder="contraseña"
            value={password}
            onChange={onInputChange}
        />
    </>
  )
}
