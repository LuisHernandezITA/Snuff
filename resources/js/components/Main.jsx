import React from "react";
import Card_C from "./Card_C";
import ListCard from "./ListCard";
import Menu from "./Menu";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";

function Main() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route path="Card" element={<Card_C />} />
                    <Route path="ListCard" element={<ListCard />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Routes>
        </>
    );
}

export default Main;
