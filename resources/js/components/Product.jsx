import React from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();

    // Puedes utilizar el valor de id para cargar los detalles del producto, por ejemplo, desde una base de datos o una fuente de datos.
    // Luego, puedes mostrar los detalles del producto en este componente.

    return (
        <div>
            <h1>Detalles del Producto</h1>
            <p>ID del producto: {id}</p>
            <p>Nombre del producto: {name}</p>
            {/* Agrega más contenido del producto aquí */}
        </div>
    );
}

export default Product;
