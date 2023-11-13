import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import smallImage from "/public/favicon.ico";
import { useUser } from "./UserContext";
import "/resources/css/app.css";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const { userInfo } = useUser(); // Obtén la información del usuario desde el contexto.
    const userId = userInfo ? userInfo.id : "";

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

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
        // Verifica si el userId está vacío o es false
        if (!userId) {
            setIsButtonDisabled(true);
            showNotification(
                "You need to sign in to add products to the cart."
            );
            setIsButtonDisabled(false);
            return;
        }

        // Construye el objeto con la información del producto
        const productData = {
            product_id: product.id,
        };

        // Realiza la solicitud POST para agregar el producto al carrito
        axios
            .post(`/api/addcart/${userId}`, productData)
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await axios.post(
                    `http://localhost:8000/api/products_show`,
                    { id }
                );
                if (productResponse.data.length > 0) {
                    setProduct(productResponse.data[0]);
                } else {
                    console.error("Producto no encontrado");
                }
            } catch (error) {
                console.error(error);
            }

            try {
                const colorsResponse = await axios.post(
                    "http://localhost:8000/api/getProductColors",
                    { id }
                );
                if (colorsResponse.data.length > 0) {
                    setColors(colorsResponse.data);
                } else {
                    setColors(null);
                }
            } catch (error) {
                console.error(error);
                setColors(null);
            }

            try {
                const sizesResponse = await axios.post(
                    "http://localhost:8000/api/getProductSizes",
                    { id }
                );
                if (sizesResponse.data.length > 0) {
                    setSizes(sizesResponse.data);
                } else {
                    setSizes(null);
                }
            } catch (error) {
                console.error(error);
                setSizes(null);
            }
        };

        if (id) {
            fetchData();
        }

        console.log(product);
        console.log(colors);
        console.log(sizes);
    }, [id]);

    if (!product) {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <div className="app" style={{ position: "relative" }}>
            <div className="details">
                <div className="big-img">
                    {!product.available && (
                        <div className="sold-out-badge">SOLD OUT</div>
                    )}
                    <img src={product.images} alt="Producto" />
                </div>
                <div className="box">
                    <div className="row">
                        <h2 style={{ color: "black", fontSize: "2.6em" }}>
                            {product.name}
                        </h2>
                        <span>$ {product.price} MXN</span>
                    </div>
                    <p>{product.description}</p>

                    {colors && colors.length > 0 && (
                        <div>
                            <h2 style={{ color: "black" }}>Colors</h2>
                            <div className="color-buttons">
                                {colors.map((colorId, index) => (
                                    <button
                                        key={index}
                                        className={`color-button-detail ${
                                            selectedColor === colorId
                                                ? "selected"
                                                : ""
                                        }`}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            backgroundColor: colorId,
                                            border: "1px solid black",
                                        }}
                                        onClick={() =>
                                            setSelectedColor(colorId)
                                        }
                                    ></button>
                                ))}
                            </div>
                            <br></br>
                        </div>
                    )}

                    {sizes && sizes.length > 0 && (
                        <div>
                            <h2 style={{ color: "black" }}>Sizes</h2>
                            <div
                                className="size-buttons-detail"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                {sizes.map((sizeId, index) => (
                                    <button
                                        key={index}
                                        className={`size-button-detail ${
                                            selectedSize === sizeId
                                                ? "selected"
                                                : ""
                                        }`}
                                        style={{
                                            width: 25,
                                            height: 25,
                                            margin:
                                                index === 0
                                                    ? "0 5px 0 0"
                                                    : "0 5px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                        onClick={() => setSelectedSize(sizeId)}
                                    >
                                        {sizeId}
                                    </button>
                                ))}
                            </div>
                            <br></br>
                        </div>
                    )}

                    <MDBBtn
                        class={`custom-button ${
                            isButtonDisabled || !product.available
                                ? "clicked"
                                : ""
                        }`}
                        block
                        size="lg"
                        onClick={handleButtonClick}
                        disabled={isButtonDisabled || !product.available}
                    >
                        <MDBIcon fas icon="shopping-cart" />{" "}
                        {/* Icono del carrito */}
                        {isButtonDisabled ? null : "Add to Cart"}{" "}
                        {/* Texto del botón si no está deshabilitado */}
                    </MDBBtn>
                </div>
            </div>
            <div className="thumb">
                <img src={product.images} alt="Thumbnail 1" />
                <img src="URL_IMAGEN_THUMBNAIL_2" alt="Thumbnail 2" />
                {/* Agrega más miniaturas según sea necesario */}
            </div>
            {/* Imagen en la esquina inferior derecha */}
            <img
                src={smallImage}
                alt="Small Image"
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    maxWidth: "100%", // Hace que la imagen sea responsive
                    height: "auto", // Hace que la imagen sea responsive
                }}
            />
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
        </div>
    );
}

export default Product;
