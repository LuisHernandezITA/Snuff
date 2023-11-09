import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [colors, setColors] = useState([]);

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

        const getColors = async () => {
            try {
              const response = await axios.post('http://localhost:8000/api/getProductColors', { id });
              if (response.data.length > 0) {
                setColors(response.data);
              } else {
                setColors(null);
              }
            } catch (error) {
              console.error(error);
              setColors(null);
            }
          };

        if (id) {
            getProductDetails();
            getColors();
        }
        console.log(product);
        console.log(colors);
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

                    {colors ? ( // Verifica si hay un nombre de usuario
                    <div>
                    <div className="row">
                        <h2>Colors</h2>
                    </div>
                    <div className="colors">
                    
                        {colors.map((colorId, index) => (
                            <button
                            className="color"
                            style={{
                              width: 30,
                              height: 30,
                              backgroundColor: colorId,
                            }}
                          >
                          </button>                          
                        ))}
                    </div>
                    </div>
                            ) : (
                                <h1></h1>
                            )
                    }
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
