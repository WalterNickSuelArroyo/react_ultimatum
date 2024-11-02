import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'nico@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState Changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email Changed!');
    }, [email]);

  return (
    <>
        <h1>Formulario simple</h1>
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

        {
            (username === 'strider2') && <Message />
        }
    </>
  )
}
