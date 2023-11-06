import React from "react";
import ListCard from "./ListCard";
import Menu from "./Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Login_B from "./Login_B";
import Cart from "./Cart";
import Product from "./Product";

function Main() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route path="Product/:id" element={<Product />} />
                    <Route path="ListCard" element={<ListCard />} />
                    <Route path="Login_B" element={<Login_B />} />
                    <Route path="Cart" element={<Cart />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Routes>
        </>
    );
}

export default Main;
