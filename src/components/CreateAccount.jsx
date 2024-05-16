import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Modal } from 'bootstrap';


const CreateAccount = () => {
  return (
    <div>
        <Nav.Link as={Link} to="/register" className={location.pathname === '/register' ? 'active' : ''}><h6> <u>Sign up for leaving a comment. </u></h6></Nav.Link>
    </div>
  )
}

export default CreateAccount