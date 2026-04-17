import {useState, useContext} from "react"
import { AuthContext } from "../Context/AuthContext"

function Login() {
    const [form,setform] = useState({
        username:"",
        password:""
    });
    const { login} = useContext(AuthContext);
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit = (e)=> {
        e.preventDefault();

        const stored = JSON.parse(localStorage.getItem("userdata"));
        if(
            stored.username === form.username &&
            stored.password === form.password
        ) {
            login(form);
        } else {
            alert("Invalid Credentials");
        }

    };
    return(
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
            <input
            type="text"
            name="username"
            onChange={handleChange}
            />

            <input
            type="text"
            name="password"
            onChange={handleChange}
            />
            <button type= "submit">Login</button>

        </form>
    );

}
export default Login