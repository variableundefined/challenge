import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export default function AllUsers(){
    const [users, setUsers] = useState([]);

    // On load, fetch the users
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, [])

    let Rows = [];

    for(const [key, value] of Object.entries(users)){
        Rows.push(<tr key={key}>
            <td>{value.username}</td>
            <td>{value.age}</td>
        </tr>)
    }

    return (
        <React.Fragment>
            <h1 className={"text-center"}>All Users</h1>
            <p className={"text-center"}><strong>Users and their age</strong></p>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>User Age</th>
                </tr>
                </thead>
                <tbody>
                {Rows}
                </tbody>
            </Table>
        </React.Fragment>
    )
}