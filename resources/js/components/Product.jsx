import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.post(`http://localhost:8000/api/products_show`, { id });
        if (productResponse.data.length > 0) {
          setProduct(productResponse.data[0]);
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error(error);
      }

      try {
        const colorsResponse = await axios.post('http://localhost:8000/api/getProductColors', { id });
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
        const sizesResponse = await axios.post('http://localhost:8000/api/getProductSizes', { id });
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

          {colors && colors.length > 0 && (
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
                  ></button>
                ))}
              </div>
            </div>
          )}

          {sizes && sizes.length > 0 && (
            <div>
              <div className="row">
                <h2>Sizes</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {sizes.map((sizeId, index) => (
                  <button
                    key={index}
                    className="size"
                    style={{
                      width: 25,
                      height: 25,
                      margin: index === 0 ? '0 5px 0 0' : '0 5px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {sizeId}
                  </button>
                ))}
              </div>
            </div>
          )}

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
