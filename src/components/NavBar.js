import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/" style={{paddingLeft: 13, textDecoration: 'none'}}><Navbar.Brand href="#home">Socail App</Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Link to="" style={{paddingLeft: 13, textDecoration: 'none'}}><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="" style={{paddingLeft: 13, textDecoration: 'none'}}><Nav.Link href="#features">Find Friends</Nav.Link></Link>
                    <Link to="" style={{paddingLeft: 13, textDecoration: 'none'}}><Nav.Link href="#pricing">My Account</Nav.Link></Link>
                    <Link to="/login" style={{paddingLeft: 600, textDecoration: 'none'}}><Nav.Link href="#pricing">Log Out</Nav.Link></Link>
                </Nav>
            </Container>
         </Navbar>
    )
} 
