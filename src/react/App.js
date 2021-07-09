import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import AllUsers from './components/AllUsers';
import UsersByItems from './components/UsersByItems';

export default function App(){
    return (
        <Container fluid>
            <AllUsers />
            <UsersByItems />
        </Container>
    )
}