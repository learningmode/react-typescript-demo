import { useContext } from "react"
import {UserContext} from '../context/UserContext'


export const User = ()=>{
 const userContext = useContext(UserContext);
 const handleLogin = ()=>{
     if(userContext){
        userContext.setUser({
            name:'John',
            email:'john@example.com'
        })
     }
 }
 const handleLogout = ()=>{
     if(userContext){
         userContext.setUser(null);
     }
 }
// User cannot logout here
    return(
        <div>
            <button onClick={handleLogin}>Logged In</button>
            <button onClick={handleLogout}>Logged Out</button>
            <div>User is {userContext?.user?.name}</div>
            <div>Email is {userContext?.user?.email}</div>
        </div>
    )
}