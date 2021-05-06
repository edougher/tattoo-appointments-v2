import React, { Component } from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class MyNavbar extends Component {


    render() {
        return (
        
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand><NavLink to="/home">Dark Rose Tattoo</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="mr-auto">
        <Button variant="outline-info">
        <NavLink to="/home">Home</NavLink>
        </Button>
        <Button variant="outline-info">
        <NavLink to="/appointments">Appointments</NavLink>
        </Button>
        {this.props.currentUser !== 'admin@d.com' ? 
        <Button variant="outline-info">
        <NavLink to="/request">Request Appointment</NavLink>
        </Button>
        :
        ''
        }
        <Button variant="outline-info">
        <NavLink to="/calendar">Calendar</NavLink>
        </Button>
        <Button variant="outline-info">
        <NavLink to="/signin">Sign In</NavLink>
        </Button>
        </Nav>
        </Navbar>
        );
      }
    }
    
    const mapStateToProps = state => {
      return {
        currentUser: state.currentUser.username
      }
    }

      

export default connect(mapStateToProps)(MyNavbar);