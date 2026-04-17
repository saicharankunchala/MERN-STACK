import {useState} from "react"

function Register() {
    const [form,setForm] = useState({
        username:"",
        password:""
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        console.log(form)
        

    };
    const handleSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem("userdata",JSON.stringify(form))
        alert("Registerd Succefully")

    };
    return(
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
             <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            />
            <input
            type="text"
            name="password"
            placeholder="password"
            onChange={handleChange}
            />

            
            <button type= "submit">Register</button>
        </form>
    );
}
export default Register