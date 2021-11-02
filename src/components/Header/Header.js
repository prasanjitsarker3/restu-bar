
import React from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Button, Form, FormControl, Carousel } from 'react-bootstrap';
import '../Header/Header.css';
import photo from '../../Photo/pasta.jpg'
import photo1 from '../../Photo/footer-bg.jpg'
import photo2 from '../../Photo/home-bg.jpg'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Header = () => {
    return (
        <div className="background-img">
            <Navbar bg="white" expand={false}>
                <Container fluid>
                    <Navbar.Brand>Spice Cafe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div>
                <Carousel>
                    <Carousel.Item className="carousel-img">

                        <img src={photo2} alt="" height="100%" width="100%" srcset="" />
                        <Carousel.Caption >
                            <h3 className="text-caption">Order Tasty & Fresh Food Anytime !</h3>
                            <p >Just Confirm your Order and enjoy our delicious fastest delivery...</p>
                            <Button variant="success"> <FontAwesomeIcon icon={faShoppingCart} />Oder Now</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-img">
                        <img src={photo1} height="100%" width="100%" alt="" />

                        <Carousel.Caption>
                            <h3 className="text-caption">Order Tasty & Fresh Food Anytime !</h3>
                            <p >Just Confirm your Order and enjoy our delicious fastest delivery...</p>
                            <Button variant="success"> <FontAwesomeIcon icon={faShoppingCart} />Oder Now</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-img">
                        <img src={photo} height="100%" width="100%" alt="" srcset="" />

                        <Carousel.Caption>
                        <h3 className="text-caption">Order Tasty & Fresh Food Anytime !</h3>
                            <p >Just Confirm your Order and enjoy our delicious fastest delivery...</p>
                            <Button variant="success"> <FontAwesomeIcon icon={faShoppingCart}/>Oder Now</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Header;