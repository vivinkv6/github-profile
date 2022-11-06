import React from 'react'
import "../App.css";
function Input({user,setUser,setUserDetails,userDetails}) {

   

  return (
    <>
    <h3>Github Profile</h3>
  
    <input type="text" value={user} placeholder="GitHub Username" onChange={(e)=>setUser(e.target.value)}/>
   
   
  </>
  )
}

export default Input
