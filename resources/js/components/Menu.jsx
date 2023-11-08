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
import { useUser } from "./UserContext";
import ListCardNewest from "./ListCardNewest";

function Menu() {
    const location = useLocation();
    const [showCarousel, setShowCarousel] = useState(true);
    const { userInfo } = useUser(); // Obtén la información del usuario desde el contexto.
    const userName = userInfo ? userInfo.name : ""; // Obtén el nombre del usuario desde el contexto.
    const userAdmin = userInfo ? userInfo.admin : "";

    //NOTIFICATIONS

    const [notification, setNotification] = useState(null);
    const [notificationVisible, setNotificationVisible] = useState(false);

    useEffect(() => {
        if (notificationVisible) {
            const progressBar = document.querySelector(".notification-bar");
            progressBar.classList.add("notification-bar-progress");

            setTimeout(() => {
                setNotificationVisible(false);
            }, 3000);
        }
    }, [notificationVisible]);

    const showNotification = (message) => {
        setNotification(message);
        setNotificationVisible(true);
    };

    const handleLogout = () => {
        axios
            .delete("/api/accesstokens/destroy")
            .then(() => {
                showNotification("Sesión cerrada exitosamente");
                setTimeout(() => {
                    window.location.href = "/";
                }, 1500);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const hideListCardNewest = location.pathname === "/ListCard";
    // Usar useEffect para ajustar showCarousel en función de la ubicación actual
    useEffect(() => {
        // Verificar si la ubicación actual es "Login_B"
        if (
            location.pathname === "/Login_B" ||
            location.pathname === "/Cart" ||
            location.pathname === "/Crud" ||
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
                        {userName ? ( // Verifica si hay un nombre de usuario
                            userAdmin ? ( // Verifica si hay un nombre de usuario
                                <Nav>
                                    <Nav.Link as={Link} to="">
                                        {userName} Mode
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="Crud">
                                        Products
                                    </Nav.Link>
                                </Nav>
                            ) : (
                                <Nav.Link as={Link} to="">
                                    Hi, {userName}
                                </Nav.Link>
                            )
                        ) : (
                            <p></p>
                        )}
                        <Nav.Link as={Link} to="">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="ListCard">
                            Catalogue
                        </Nav.Link>
                        {notification && (
                            <div
                                className={`notification ${
                                    notificationVisible ? "show" : ""
                                }`}
                            >
                                {notification}
                                <div className="notification-bar"></div>
                            </div>
                        )}
                        {userName ? ( // Verifica si hay un nombre de usuario
                            <Nav.Link onClick={handleLogout} title="Logout">
                                <MDBIcon
                                    fas
                                    icon="user-slash"
                                    className="icon"
                                />
                            </Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="Login_B" title="Login">
                                <MDBIcon fas icon="user" className="icon" />
                            </Nav.Link>
                        )}

                        <Nav.Link as={Link} to="Cart" title="Shopping Cart">
                            <MDBIcon
                                fas
                                icon="shopping-cart"
                                className="icon"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {showCarousel && <Carrousel />}
            {!hideListCardNewest && showCarousel && (
                <p className="labelnew">- NEW ARRIVALS! -</p>
            )}
            {!hideListCardNewest && showCarousel && <ListCardNewest />}
            {!hideListCardNewest && showCarousel && (
                <div className="text-center">
                    <Link to="/ListCard" className="ver-todo-link">
                        SEE ALL <i class="fas fa-eye"></i>
                    </Link>
                </div>
            )}

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
