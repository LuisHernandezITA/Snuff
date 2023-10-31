import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button, Card, Spinner, Stack } from "react-bootstrap";
import axios from "axios";
import Card_C from "./Card_C";

function ListCard() {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const getUsers = async () => {
            await axios
                .get("http://localhost:8000/api/user_index")
                .then(function (response) {
                    // handle success
                    console.log(response);
                    setUserData(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        };
        getUsers();
    }, []);

    if (!userData.length) return;
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>;

    return (
        <div className="row">
            {userData.map((user) => (
                <div className="col-md-3 mb-4">
                    <Card_C name={user.name} email={user.email} />
                </div>
            ))}
        </div>
    );
}

export default ListCard;


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
