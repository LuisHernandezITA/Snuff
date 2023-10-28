import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import "/resources/css/app.css";
import { Carousel } from "react-bootstrap";
import ExampleCarouselImage from "./ExampleCarouselImage";

function Menu() {
    return (
        <>
            <Navbar className="navbar navbar-expand-lg bg-dark navbar-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logosmc.svg"
                            width="150"
                            height="60"
                            className="d-inline-block align-top logo"
                        />{" "}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="Card">
                            Card
                        </Nav.Link>
                        <Nav.Link as={Link} to="ListCard">
                            List Cards
                        </Nav.Link>
                        <Nav.Link as={Link} to="Login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Carousel>
                <Carousel.Item interval={2000}>
                    <ExampleCarouselImage
                        text="First slide"
                        image="/img/car1.png"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <ExampleCarouselImage
                        text="Second slide"
                        image="/img/car2.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <ExampleCarouselImage
                        text="Third slide"
                        image="/img/car3.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </section>
        </>
    );
}

export default Menu;
