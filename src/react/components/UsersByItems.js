import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from 'react-bootstrap/Spinner';


export default function UsersByItems(){
    const [ages, setAges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(['carrot']);

    // On load, fetch the age group
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3000/users/age?item=${selectedItem}`)
            .then(response => response.json())
            .then(data => setAges(data));
        setLoading(false);
    }, [selectedItem])

    let rows = [];

    for(const [key, value] of Object.entries(ages)){
        rows.push(<tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
        </tr>)
    }

    // Fetch the available items to populate the dropdown menu
    useEffect(() => {
        fetch(`http://localhost:3000/items`)
            .then(response => response.json())
            .then(data => {
                setItems(data);
            });
    }, [])

    let options = [];

    for(const item of items){
        options.push(
            <Dropdown.Item key={item} eventKey={item}>
                {item}
            </Dropdown.Item>
        )
    }

    function handleSelect(e) {
        setSelectedItem(e);
    }

    return(
        <React.Fragment>
            <h1>Age Demographics of Users With ___</h1>
            <DropdownButton
                            className={"py-1"}
                            id="items-dropdown-button"
                            title={selectedItem}
                            onSelect={handleSelect}>
                {options}
            </DropdownButton>
            {loading ? <Spinner animation={"border"} variant={"primary"} /> :
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Age</th>
                        <th>Count</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
            }
        </React.Fragment>
    )
}