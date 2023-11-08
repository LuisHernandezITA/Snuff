import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null); // Cambiar a userInfo en lugar de userData

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessTokenResponse = await axios.get(
                    `http://localhost:8000/api/accesstokens_index`
                );

                if (accessTokenResponse.data) {
                    const accessTokenInfo = accessTokenResponse.data;
                    const user_id = accessTokenInfo.user_id;
                    const userInfoResponse = await axios.post(
                        `/api/user_show?id=${user_id}`
                    );
                    const userInfo = userInfoResponse.data[0]; // Supongo que solo se espera un resultado.

                    if (userInfo) {
                        setUserInfo(userInfo); // Almacena la información del usuario en el estado.
                    } else {
                        console.error("Usuario no encontrado");
                    }
                } else {
                    //
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <UserContext.Provider value={{ userInfo }}>
            {children}
        </UserContext.Provider>
    );
};
