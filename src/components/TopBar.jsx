import React from 'react'
import '../scss/TopBar.scss'

import Logo from './../img/BuildStudios.png'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import HeroJumper from './pages/products/HeroJumper';

function TopBar() {
    return (
        <Router>
            <div className='topBar'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <img src={Logo} alt="logo" />
                        <Navbar.Brand as={Link} to={"/home"}>BuildStudios</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                                <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='contentDiv'>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>

                    <Route path="/herojumper">
                        <HeroJumper />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default TopBar