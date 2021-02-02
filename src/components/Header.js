import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <>
            <div>
                
                <Navbar bg = 'light' expand="md">
                <Navbar sticky="top" />
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/">My Reservation App</NavbarBrand>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/Home'> Home</NavLink>
                            </NavItem>&nbsp; &nbsp; &nbsp;
                            <NavItem>
                                <NavLink className="nav-link" to='/Myreservations'> My Reservations</NavLink>
                            </NavItem>&nbsp; &nbsp; &nbsp;
                            <NavItem>
                                <NavLink className="nav-link"  to='/ReservationDetails'> Reservation Details</NavLink>
                            </NavItem>&nbsp; &nbsp; &nbsp;
                            <NavItem>
                                <NavLink className="nav-link" to='/Profile'> My Profile</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
            </>
        );
    }
}

export default Header;