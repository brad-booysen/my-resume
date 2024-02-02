import { Navbar, Nav } from 'react-bootstrap';

const TopNavBar = () => {
    return (
        <Navbar bg="black" expand="lg" variant="dark">
            <Navbar.Brand href="./">My Resume</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavBar;