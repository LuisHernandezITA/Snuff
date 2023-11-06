import React, { useState } from "react";
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
} from "mdb-react-ui-kit";
import "/resources/css/app.css";

function Login_B() {
    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        c_password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        c_password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        const newErrors = { ...errors };

        if (name === "name") {
            newErrors[name] = value.trim() === "" ? "* Name is required" : "";
        } else if (name === "email") {
            newErrors[name] =
                value.trim() === ""
                    ? "* Email is required"
                    : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
                    ? "* Invalid email address"
                    : "";
        } else if (name === "password") {
            newErrors[name] =
                value.trim() === "" ? "* Password is required" : "";
        } else if (name === "c_password") {
            newErrors[name] =
                value.trim() === ""
                    ? "* Confirm Password is required"
                    : value !== formData.password
                    ? "* Passwords do not match"
                    : "";
        }

        setErrors(newErrors);
    };

    const isFormValid =
        Object.values(errors).every((error) => error === "") &&
        Object.values(formData).every((value) => value.trim() !== "");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes enviar los datos del formulario al servidor
        console.log(formData);
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs
                pills
                justify
                className="mb-3 d-flex flex-row justify-content-between"
            >
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab1")}
                        active={justifyActive === "tab1"}
                    >
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleJustifyClick("tab2")}
                        active={justifyActive === "tab2"}
                    >
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                    <form action="api/login" method="post">
                        {errors.email && (
                            <p className="error-text">{errors.email}</p>
                        )}
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Email"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="error-text">{errors.password}</p>
                        )}

                        <MDBInput
                            wrapperClass="mb-4"
                            label="Password"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheckDefault"
                                label="Remember me"
                            />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn
                            class={`custom-button`}
                            size="lg"
                            className="mb-4 w-100"
                        >
                            Sign in
                        </MDBBtn>
                        <p className="text-center">
                            Not a member?{" "}
                            <a
                                href="#!"
                                onClick={() => handleJustifyClick("tab2")}
                                active={justifyActive === "tab2"}
                            >
                                Register
                            </a>
                        </p>
                    </form>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === "tab2"}>
                    <form action="api/register" method="post">
                        {errors.name && (
                            <p className="error-text">{errors.name}</p>
                        )}
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Name"
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <p className="error-text">{errors.email}</p>
                        )}
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Email"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="error-text">{errors.password}</p>
                        )}

                        <MDBInput
                            wrapperClass="mb-4"
                            label="Password"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.c_password && (
                            <p className="error-text">{errors.c_password}</p>
                        )}
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Confirm Password"
                            id="c_password"
                            type="password"
                            name="c_password"
                            value={formData.c_password}
                            onChange={handleChange}
                        />

                        <MDBBtn
                            class={`custom-button`}
                            size="lg"
                            className="mb-4 w-100"
                            type="submit"
                            disabled={!isFormValid}
                        >
                            Sign up
                        </MDBBtn>
                    </form>
                </MDBTabsPane>
            </MDBTabsContent>
        </MDBContainer>
    );
}

export default Login_B;
