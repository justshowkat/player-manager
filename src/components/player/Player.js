import React from 'react';
import './Player.css'
import { Button, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    const {player, img, age, position, salary, rank} = props.data //props destructuring

    return (
        <div className="player-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><strong>{player}</strong></Card.Title>
                    <Card.Text><strong>Salary: €</strong> {salary}</Card.Text>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th><strong>Age:</strong></th>
                            <th><strong>Position:</strong></th>
                            <th><strong>Rank:</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>{age}</td>
                            <td>{position}</td>
                            <td>{rank}</td>
                            </tr>
                            
                        </tbody>
                        </Table>
                    <Button variant="danger" onClick={() => props.addPlayerHandle(props.data)}>Add Player <FontAwesomeIcon icon={faPlusSquare} /></Button>
                </Card.Body>
                </Card>
        </div>
    );
};

export default Player;