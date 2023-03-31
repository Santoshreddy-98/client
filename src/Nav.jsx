import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="container">
      
    <div className="navbar navbar-expand-lg navbar-dark bg-dark" style={{justifyContent:"space-between"}}>
    <span style={{float:"left",fontSize:"40px",fontWeight:"650"}} className="navbar-brand">Online Assesment  
     </span>
    
    
  <div>
  <Link to="/register" className='navbar-brand'><h3>Register</h3></Link>
    <Link to="/login" className='navbar-brand'><h3>Login</h3></Link>
  </div>
   
    {/* <Link to="/myprofile" className='navbar-brand'><h5>My Profile</h5></Link> */}
      
    
      
    </div>
    </div>

  )
}

export default Nav
