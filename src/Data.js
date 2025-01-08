import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function Data () {
    const [allDatas, setAllData ] = useState([]);

    useEffect (() => {
        fetch('data.json', {method: 'GET'})
            .then(res => res.json())
            .then(data => {
                setAllData(data);
                console.log(allDatas);
            })
    }, [])

    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <Table striped hover >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {allDatas.map(Data => (
                        <tr>
                            <td>{Data.id}</td>
                            <td>{Data.title}</td>
                            <td>{Data.content}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Data;