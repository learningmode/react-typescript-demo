import { useState } from "react"

type  AuthUser ={
    name:string,
    email:string
}
export const User = ()=>{
 const [user,setUser] = useState<AuthUser | null>(null)
 const handleLogin = ()=>{
     setUser({
         name:'John Doe',
         email:'johndoe@example.com'
     })
 }
 const handleLogout = ()=>{
    setUser(null)
 }
    return(
        <div>
            <button onClick={handleLogin}>Logged In</button>
            <button onClick={handleLogout}>Logged Out</button>
            <div>User is {user?.name}</div>
            <div>Email is {user?.email}</div>
        </div>
    )
}