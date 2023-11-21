import React, { useState, useEffect } from "react";
import { Button, Card, Badge } from "react-bootstrap";
import "/resources/css/app.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";

function Card_C(props) {
    const id = props.id;
    const firstName = props.name;
    const price = props.price;
    const description = props.description;
    const images = props.images;
    const available = props.available;

    const { userInfo } = useUser(); // Obtén la información del usuario desde el contexto.
    const userId = userInfo ? userInfo.id : "";
    const accessToken = userInfo ? userInfo.token : "";

    console.log(userId);

    //NOTIFICATIONS

    const [notification, setNotification] = useState(null);
    const [notificationVisible, setNotificationVisible] = useState(false);

    useEffect(() => {
        if (notificationVisible) {
            const progressBar = document.querySelector(".notification-bar");
            progressBar.classList.add("notification-bar-progress");

            setTimeout(() => {
                setNotificationVisible(false);
            }, 1500);
        }
    }, [notificationVisible]);

    const showNotification = (message) => {
        setNotification(message);
        setNotificationVisible(true);
    };

    //ADD TO CART

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = () => {
        // Desactiva el botón al hacer clic

        if (!userId) {
            showNotification(
                "You need to sign in to add products to the cart."
            );
            setIsButtonDisabled(true);
            return;
        }

        // Construye el objeto con la información del producto
        const productData = {
            product_id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            images: props.images,
            available: props.available,
        };

        // Realiza la solicitud POST para agregar el producto al carrito
        axios
            .post(`/api/addcart/${userId}`, productData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                console.log(response.data); // Puedes manejar la respuesta del servidor aquí
                showNotification("Product added to Cart!");
            })
            .catch((error) => {
                console.error("Error adding product to cart:", error);
                // Manejar el error aquí
            });

        setIsButtonDisabled(true);
    };

    return (
        <Card className="my-card">
            <Link to={`/Product/${id}`}>
                <div className="my-card-img-container">
                    {!available && (
                        <div className="sold-out-badge">SOLD OUT</div>
                    )}
                    <Card.Img
                        src={images}
                        alt="Card Image"
                        className={`my-card-img ${
                            !available ? "sold-out" : ""
                        }`}
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
                    class={`custom-button ${
                        isButtonDisabled || !available ? "clicked" : ""
                    }`}
                    block
                    size="lg"
                    onClick={handleButtonClick}
                    disabled={isButtonDisabled || !available}
                >
                    <MDBIcon fas icon="shopping-cart" />{" "}
                    {/* Icono del carrito */}
                    {isButtonDisabled ? null : "Add to Cart"}{" "}
                    {/* Texto del botón si no está deshabilitado */}
                </MDBBtn>
            </Card.Body>

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
        </Card>
    );
}

export default Card_C;
