import { useState } from "react"

type  AuthUser ={
    name:string,
    email:string
}
export const User = ()=>{
 const [user,setUser] = useState({} as AuthUser)
 const handleLogin = ()=>{
     setUser({
         name:'John Doe',
         email:'johndoe@example.com'
     })
 }
// User cannot logout here
    return(
        <div>
            <button onClick={handleLogin}>Logged In</button>
            <div>User is {user?.name}</div>
            <div>Email is {user?.email}</div>
        </div>
    )
}