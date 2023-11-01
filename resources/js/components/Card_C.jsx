import React from "react";
import { Button, Card } from "react-bootstrap";
import "/resources/css/app.css";

function Card_C(props) {
    const firstName = props.name;
    const email = props.email;
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
                    {email}
                </Card.Subtitle>
                <Card.Text>Hola, como estas</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Card_C;