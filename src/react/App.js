import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllUsers from './components/AllUsers';
import UsersByItems from './components/UsersByItems';

export default function App(){
    return (
        <Container fluid>
            <Row>
                <Col md={{span: 4, offset: 1}}>
                    <AllUsers />
                    <UsersByItems />
                </Col>
            </Row>
        </Container>
    )
}