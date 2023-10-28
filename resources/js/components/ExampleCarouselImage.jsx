import React from "react";

function ExampleCarouselImage({ text, image }) {
    return (
        <img
            src={image} // Reemplaza URL_DE_TU_IMAGEN_AQUÍ con la URL de la imagen para esta diapositiva
            alt={text}
            style={{ width: "100%", height: "auto" }}
        />
    );
}

export default ExampleCarouselImage;
