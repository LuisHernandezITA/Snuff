import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import "/resources/css/app.css";
import Carrousel from "./Carrousel";
import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Footer from "./Footer";
import ListCard from "./ListCard";
import Cart from "./Cart";


function Menu() {
    const [showCarousel, setShowCarousel] = useState(true);

    const handleNavClick = () => {
        // Oculta el carrusel cuando se hace clic en "Login"
        setShowCarousel(false);
    };

    const handleNavClickWithCarousel = () => {
        // Vuelve a mostrar el carrusel cuando se hace clic en cualquier otro enlace
        setShowCarousel(true);
    };

    return (
        <>
            <Navbar className="navbar navbar-expand-lg bg-dark navbar-dark">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to=""
                        onClick={handleNavClickWithCarousel}
                    >
                        <img
                            alt=""
                            src="/img/logosmc.svg"
                            width="150"
                            height="45"
                            className="d-inline-block align-top logo"
                        />{" "}
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link
                            as={Link}
                            to=""
                            onClick={handleNavClickWithCarousel}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="Card"
                            onClick={handleNavClickWithCarousel}
                        >
                            Card
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="ListCard"
                            onClick={handleNavClickWithCarousel}
                        >
                            List Cards
                        </Nav.Link>
                        <Nav.Link as={Link} to="Login" onClick={handleNavClick}>
                            Login
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="Login_B"
                            onClick={handleNavClick}
                        >
                            Login
                        </Nav.Link>

                        <Nav.Item className="ml-auto">
                            <Nav.Link
                                as={Link}
                                to="Cart"
                                onClick={handleNavClick}
                            >
                                <MDBIcon fas icon="shopping-cart" />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>

            {showCarousel && <Carrousel />}
            {showCarousel && <ListCard />}

            <section>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </section>

            <Footer />
        </>
    );
}

export default Menu;
