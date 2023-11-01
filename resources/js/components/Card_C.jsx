import React from "react";
import { Button, Card } from "react-bootstrap";
import "/resources/css/app.css";

function Card_C(props) {
    const firstName = props.name;
    const price = props.price;
    const description = props.description;
    const images = props.images;

    return (
        <Card className="my-card">
            <div className="my-card-img-container">
                <Card.Img
                    src="/img/playeramm.png"
                    alt="Card Image"
                    className="my-card-img"
                />
            </div>
            <Card.Body>
                <Card.Title>{firstName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {description}
                </Card.Subtitle>
                <Card.Text>{price}</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Card_C;
