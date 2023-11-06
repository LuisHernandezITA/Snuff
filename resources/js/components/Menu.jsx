import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import "/resources/css/app.css";
import Carrousel from "./Carrousel";
import React, { useState, useEffect } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Menu() {
    const location = useLocation();
    const [showCarousel, setShowCarousel] = useState(true);

    // Usar useEffect para ajustar showCarousel en función de la ubicación actual
    useEffect(() => {
        // Verificar si la ubicación actual es "Login_B"
        if (
            location.pathname === "/Login_B" ||
            location.pathname === "/Cart" ||
            location.pathname.startsWith("/Product")
        ) {
            setShowCarousel(false);
        } else {
            setShowCarousel(true);
        }
    }, [location]);

    return (
        <>
            <Navbar className="navbar navbar-expand-lg bg-dark navbar-dark">
                <Container>
                    <Navbar.Brand as={Link} to="">
                        <img
                            alt=""
                            src="/img/logosmc.svg"
                            width="150"
                            height="45"
                            className="d-inline-block align-top logo"
                        />{" "}
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link as={Link} to="">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="ListCard">
                            Catalogue
                        </Nav.Link>
                        <Nav.Link as={Link} to="Login_B">
                            Login
                        </Nav.Link>

                        <Nav.Item className="ml-auto">
                            <Nav.Link as={Link} to="Cart">
                                <MDBIcon fas icon="shopping-cart" />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>

            {showCarousel && <Carrousel />}

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
