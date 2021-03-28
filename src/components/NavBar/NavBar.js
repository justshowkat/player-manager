import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://i.ibb.co/4tWdPfh/584a9b3bb080d7616d298777.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            FC Barcelona
            </Navbar.Brand>
        </Navbar>
        </div>
    );
};

export default NavBar;