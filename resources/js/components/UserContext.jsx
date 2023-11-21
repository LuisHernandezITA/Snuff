import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const authenticateUser = async () => {
            try {
                // Obtener el user_id de la cookie
                const user_id = getCookie("user_id");

                // Verificar si se encontró el user_id en la cookie
                if (user_id) {
                    // Autenticar al usuario por su user_id
                    const response = await axios.post("/api/login", {
                        user_id: user_id,
                    });

                    console.log(response.data.user.token);

                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${response.data.user.token}`;

                    if (response.data.success) {
                        // Obtener datos del usuario utilizando user_show
                        const userInfoResponse = await axios.post(
                            `/api/user_show?id=${user_id}`
                        );
                        const userInfo = {
                            ...userInfoResponse.data[0], // Copia los datos existentes del usuario
                            token: response.data.user.token, // Agrega el token al objeto userInfo
                        };
                        if (userInfo) {
                            setUserInfo(userInfo);
                            console.log("Usuario autenticado:", userInfo);
                        } else {
                            console.error("Datos del usuario no encontrados");
                        }
                    } else {
                        console.error("Autenticación fallida");
                    }
                } else {
                    console.error("user_id no encontrado en la cookie");
                }
            } catch (error) {
                console.error(error);
            }
        };

        authenticateUser();
    }, []);

    // Función para obtener el valor de una cookie por su nombre
    const getCookie = (name) => {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split("=");
            if (cookie[0] === name) {
                return cookie[1];
            }
        }
        return null;
    };

    return (
        <UserContext.Provider value={{ userInfo }}>
            {children}
        </UserContext.Provider>
    );
};
