import React, { useState, useEffect } from "react";
import { Spinner, Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import Card_C from "./Card_C";
import "/resources/css/app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function ListCard() {
    const [productData, setProductData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortByPrice, setSortByPrice] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/products_index");
                setProductData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/category_index");
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        fetchCategories();
    }, []);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleSortByPrice = () => {
        setSortByPrice((prevSort) => (prevSort === 'asc' ? 'desc' : 'asc'));
    };

    const getFilteredProducts = () => {
        let filteredProducts;
        if (selectedCategory === null) {
            filteredProducts = [...productData];
        } else {
            filteredProducts = productData.filter((product) => product.category_id === selectedCategory);
        }

        if (sortByPrice === 'asc') {
            return filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (sortByPrice === 'desc') {
            return filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else {
            return filteredProducts;
        }
    };

    if (productData.length === 0 || categories.length === 0) {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    const groupedProductData = [];
    for (let i = 0; i < getFilteredProducts().length; i += 2) {
        groupedProductData.push(getFilteredProducts().slice(i, i + 2));
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Categories</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => handleCategoryChange(null)}>All</Nav.Link>
                        {categories.map((category) => (
                            <Nav.Link key={category.id} onClick={() => handleCategoryChange(category.id)}>
                                {category.name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link onClick={handleSortByPrice}>
                        Sort by Price{" "}
                        {sortByPrice === "asc" ? (
                            <FontAwesomeIcon icon={faArrowDown} />
                        ) : (
                            <FontAwesomeIcon icon={faArrowUp} />
                        )}
                    </Nav.Link>
                </Nav>
            </Navbar>

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
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListCard;
