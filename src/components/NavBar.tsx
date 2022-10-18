import { Button, Container, Nav, Navbar as NavBarBS } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <NavBarBS sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: 'relative' }}
          variant='outline-primary'
          className="rounded-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512">
            <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" />
          </svg>
          <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{ color: "white", width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: "translate(25%,25%)" }}>

          </div>
        </Button>
      </Container>
    </NavBarBS>
  )
}