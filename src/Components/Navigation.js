import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/foodbank-logo.jpg';
import Home from '../Pages/Home';
import About from '../Pages/About';

const style = {
    fontWeight: 'bold',
    color: 'black'
};

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar style={{ marginTop: "-20px" }}>
                                <Navbar.Brand href="#home">
                                    <img src={logo} className="logo" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <Nav.Link href="#" style={style}>Home</Nav.Link>
                                        <Nav.Link href="#" style={style}>FoodMap</Nav.Link>
                                        <Nav.Link href="#about-us" style={style}>Contact Us</Nav.Link>
                                        <Nav.Link to="/about" style={style}>About Us</Nav.Link>
                                        <Nav.Link href="#contact-us" style={style}>Join Us</Nav.Link>
                                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown> */}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />

                            {/* <Route path="/">
                                    <Home />
                                </Route> */}
                            <Route path='about' component={About}></Route>

                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;