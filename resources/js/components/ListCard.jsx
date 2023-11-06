import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Card_C from "./Card_C";
import "/resources/css/app.css";

function ListCard() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            await axios
                .get("http://localhost:8000/api/products_index")
                .then(function (response) {
                    console.log(response);
                    setUserData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        getUsers();
    }, []);

    if (userData.length === 0) {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    // Divide el array en grupos de 2
    const groupedUserData = [];
    for (let i = 0; i < userData.length; i += 2) {
        groupedUserData.push(userData.slice(i, i + 2));
    }

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {groupedUserData.map((group, index) => (
                <div
                    key={index}
                    className="align-items-center justify-content-center mb-4"
                    style={{ margin: "20px 0" }}
                >
                    {group.map((user) => (
                        <div key={user.id} style={{ margin: "40px 35px" }}>
                            <Card_C
                                id={user.id}
                                name={user.name}
                                description={user.description}
                                price={user.price}
                                images={user.images}
                            />
                        </div>
                    ))}
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
