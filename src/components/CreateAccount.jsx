import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Modal } from 'bootstrap';
import '../styles/texto.css'

const CreateAccount = () => {
  return (
    <div className='d-flex justify-content-center my-3'>
       <Nav.Link as={Link} to="/register" className={location.pathname === '/register' ? 'active' : ''}><h6 data-bs-dismiss="modal"> <u>Sign up</u></h6></Nav.Link> <h6 className='mt-0 mx-2 texto'> <u> or </u> </h6><Nav.Link as={Link} to="/login" className={location.pathname === '/register' ? 'active' : ''}><h6 data-bs-dismiss="modal"> <u>Log in </u></h6></Nav.Link> <h6 className='mt-0 mx-2 texto'> <u>to leave a comment</u></h6>
    </div>
  )
}

export default CreateAccount