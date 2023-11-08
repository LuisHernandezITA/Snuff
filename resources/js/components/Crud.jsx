import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {
    Form,
    FormControl,
    InputGroup,
    Container,
    Row,
    Col,
} from "react-bootstrap";

function Crud() {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col sm={4}>
                        <Form className="d-flex">
                            <InputGroup>
                                <InputGroup.Text className="bg-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.5 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM1 9.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.853 16.854a.5.5 0 0 0 .707 0l3.793-3.793a.5.5 0 0 0 0-.707l-3.793-3.793a.5.5 0 0 0-.707.707L19.293 12H10.5a.5.5 0 0 0 0 1h8.793l-2.646 2.646a.5.5 0 0 0 0 .707z"
                                        />
                                    </svg>
                                </InputGroup.Text>
                                <FormControl
                                    type="search"
                                    className="me-2"
                                    placeholder="Search"
                                />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <br></br>

            <MDBTable>
                <MDBTableHead dark>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </>
    );
}

export default Crud;
