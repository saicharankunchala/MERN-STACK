import { useContext, useState } from "react"
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"
import Register from "./Components/Register"
import { AuthContext } from "./Context/AuthContext"

function App() {

  const {user}=useContext(AuthContext)
  const[page,setPage]=useState("login")
  if(user)return <Dashboard/>
  return (
    <div className="App">
      <button onClick={()=>setPage("login")}>Login</button>
      <button onClick={()=>setPage("register")}>Register</button>

      {page==="login" && <Login />}
      {page==="register" && <Register />}
    </div>
  )
}

export default App