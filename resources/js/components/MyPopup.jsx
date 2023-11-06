import React, { useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";

function MyPopup() {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState(null);

    const handleClose = () => {
        setShow(false);
        setNotification(null);
    };

    const handleShow = async () => {
        // Realizar la llamada a la API de registro o inicio de sesión aquí
        try {
            const response = await Axios.post("/api/register", formData); // Ajusta la URL y los datos según tus rutas
            if (response.data.success) {
                setNotification({
                    variant: "success",
                    message: "Registro exitoso",
                });
            } else {
                setNotification({
                    variant: "danger",
                    message: "Error en el registro: " + response.data.message,
                });
            }
            setShow(true);
        } catch (error) {
            console.error("Error al registrar", error);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Mostrar Pop-up
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Pop-up de Ejemplo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Alert variant={notification.variant}>
                        {notification.message}
                    </Alert>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyPopup;
