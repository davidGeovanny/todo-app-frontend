import React from "react";
import { useDispatch } from "react-redux";
import {
	Navbar,
	Nav,
	NavDropdown,
	Button,
} from "react-bootstrap";
import { startLogout } from "../../../actions/authActions";

export const NavBar = () => {
	const dispatch = useDispatch();   

	const handleLogout = () => {
        dispatch( startLogout() );
	};
	
	return (
		<Navbar bg="primary" variant="dark" expand="lg" sticky="top">
			<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Another action
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">
							Separated link
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>

				<Button 
					variant="danger"
					onClick={ handleLogout }
				>
					<i className="fas fa-sign-out-alt"></i>{' '}
					Salir
				</Button>
			</Navbar.Collapse>
		</Navbar>
	);
};
