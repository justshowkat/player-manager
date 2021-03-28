import React from 'react';
import { ListGroupItem, ListGroup, Card, Badge } from 'react-bootstrap';
import './Club.css'

const Club = (props) => {
    const playerSalary = props.player.map(player => parseInt(player.salary)) //this variable holds salary data to sum it up for total salary
    const totalPlayerValue = playerSalary.reduce(((init, value) => init + value), 0) //this reduce method sums up all the selected players salary
    
    return (
        <div >
            <Card style={{ width: '18rem', border: 'none' }}>
            <Card.Img variant="top" src="https://i.ibb.co/4tWdPfh/584a9b3bb080d7616d298777.png" />
            
            <ListGroup className="list-group-flush">
                <h1><strong><Badge variant="danger">Dash-Board</Badge></strong></h1>
                <ListGroupItem></ListGroupItem>
                <ListGroupItem> <strong>Total Player Added:</strong> {props.player.length}</ListGroupItem>
                <ListGroupItem><strong>Total Player Salary: €</strong> {totalPlayerValue} </ListGroupItem>
                <ListGroupItem></ListGroupItem>
            </ListGroup>
            <ListGroup className="list-group-flush">
                {playerSalary.length === 0 ? ' ' : <ListGroupItem> <h3><Badge variant="warning">Already Purchased Player</Badge></h3></ListGroupItem>}
                    {props.player.map(player => <ListGroupItem><strong>{player.player} : €</strong>{player.salary}} </ListGroupItem>)}
                
                <ListGroupItem></ListGroupItem>
            </ListGroup>
            </Card>
        </div>
    );
};

export default Club;