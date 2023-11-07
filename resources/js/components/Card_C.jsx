import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "/resources/css/app.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Card_C(props) {
    const id = props.id;
    const firstName = props.name;
    const price = props.price;
    const description = props.description;
    const images = props.images;

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = () => {
        // Realiza aquí cualquier lógica adicional, por ejemplo, agregar al carrito
        setIsButtonDisabled(true); // Desactiva el botón al hacer clic
    };

    return (
        <Card className="my-card">
            <Link to={`/Product/${id}`}>
                <div className="my-card-img-container">
                    <Card.Img
                        src={images}
                        alt="Card Image"
                        className="my-card-img"
                    />
                </div>
            </Link>
            <Card.Body>
                <Card.Title>{firstName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {description}
                </Card.Subtitle>
                <Card.Text>{price}</Card.Text>
                <MDBBtn
                    class={`custom-button ${isButtonDisabled ? "clicked" : ""}`}
                    block
                    size="lg"
                    onClick={handleButtonClick}
                    disabled={isButtonDisabled}
                >
                    <MDBIcon fas icon="shopping-cart" />{" "}
                    {/* Icono del carrito */}
                    {isButtonDisabled ? null : "Add to Cart"}{" "}
                    {/* Texto del botón si no está deshabilitado */}
                </MDBBtn>
            </Card.Body>
        </Card>
    );
}

export default Card_C;
