import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Card_C from "./Card_C";
import "/resources/css/app.css";

function ListCardNewest() {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            await axios
                .get("http://localhost:8000/api/products_newest")
                .then(function (response) {
                    console.log(response);
                    setProductData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        getUsers();
    }, []);

    if (productData.length === 0) {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    // Verificar que productData sea una matriz válida antes de dividirla en grupos
    if (!Array.isArray(productData)) {
        console.error("productData no es una matriz válida");
        return null; // o muestra un mensaje de error
    }

    // Divide el array en grupos de 2
    const groupedProductData = [];
    for (let i = 0; i < productData.length; i += 2) {
        groupedProductData.push(productData.slice(i, i + 2));
    }

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {groupedProductData.map((group, index) => (
                <div
                    key={index}
                    className="align-items-center justify-content-center mb-4"
                    style={{ margin: "20px 0" }}
                >
                    {group.map((product) => (
                        <div key={product.id} style={{ margin: "40px 35px" }}>
                            <Card_C
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                images={product.images}
                                available={product.available}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default ListCardNewest;

/* 
    return (
        <>
        <Card_C />
        <Card_C />
        </>
    );*/

/*
if (document.getElementById("app")) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <ListCard />
        </React.StrictMode>
    );
}
*/
