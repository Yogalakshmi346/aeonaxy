import React from 'react'
import './login.css';

const mystyle={
  border:"3px solid black",
  color:"yellow",
  backgroundColor:"grey"
}
 function Login() {
  return (
    <div>
      <h1 style={{color:"red",backgroundColor:"green"}}>this is login</h1>
      <h1 style={mystyle} >This is internal Styling</h1>
      <h2>This is external styling</h2>
    </div>
  )
}export default Login
