import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
    //PRODUCT DETAILS

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const response = await axios.post(`http://localhost:8000/api/products_show`, { id });
                if (response.data.length > 0) {
                    setProduct(response.data[0]);
                } else {
                    console.error("Producto no encontrado");
                }
            } catch (error) {
                console.error(error);
            }
        };

        getProductDetails();
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
        <div className="app">
            <div className="details">
                <div className="big-img">
                    <img src={product.images} alt="Producto" />
                </div>
                <div className="box">
                    <div className="row">
                    <h2>{product.name}</h2>
                        <span>Precio: ${product.price}</span>
                    </div>                    
                    <p>{product.description}</p>
                    <div className="row">
                        <h2>Colores</h2>
                    </div>
                    <div className="colors">
                        <button className="color" style={{ backgroundColor: "red" }}></button>
                        <button className="color" style={{ backgroundColor: "blue" }}></button>
                        {/* Agrega más colores según sea necesario */}
                    </div>
                    <div className="row">
                        <h2>Tallas</h2>
                    </div>
                    <div className="sizes">
                        <button className="size">S</button>
                        <button className="size">M</button>
                        <button className="size">L</button>
                        {/* Agrega más tallas según sea necesario */}
                    </div>
                    <button className="cart">Añadir al carrito</button>
                </div>
            </div>
            <div className="thumb">
                <img src="URL_IMAGEN_THUMBNAIL_1" alt="Thumbnail 1" />
                <img src="URL_IMAGEN_THUMBNAIL_2" alt="Thumbnail 2" />
                {/* Agrega más miniaturas según sea necesario */}
            </div>
        </div>
    );
}

export default Product;
