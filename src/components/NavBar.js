import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap'

export default function NavBar({changePage}) {
    return (
        <Navbar bg="dark" variant="dark" className='card sticky-top'>
            <Container>
                <Link to="/home" style={{paddingLeft: 13, textDecoration: 'none'}}><Navbar.Brand href="#home">Socail App</Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Nav.Link href="#home" onClick={()=>changePage("posts")}>Home</Nav.Link>
                    <Nav.Link href="#features" onClick={()=>changePage("users")}>Find Friends</Nav.Link>
                    <Nav.Link href="" onClick={()=>changePage("profile")}>My Account</Nav.Link>
                    <Link to="/login" style={{paddingLeft: 600, textDecoration: 'none'}}><Nav.Link href="log-out">Log Out</Nav.Link></Link>
                </Nav>
            </Container>
         </Navbar>
    )
} 
