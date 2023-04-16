import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const FantasyLeagueCard = ({ id, teamPrincipleName, constructorName, firstDriverName, secondDriverName, image_url, constuctorPoints, firstDriverPoints, secondDriverPoints, handleDeleteCard }) => {

    const onDeleteClick = (id) => {
        fetch('http://localhost:9292/fantasy_league/' + id, {
            method: 'DELETE',
        })
        handleDeleteCard(id)

    }
    return (
        <Card border="warning" style={{ width: '18rem', marginLeft: "0.5rem", marginRight: "0.5rem" }}>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>Team Principle: {teamPrincipleName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Constructor: {constructorName} <br /> Points: {firstDriverPoints + secondDriverPoints}</ListGroup.Item>
                <ListGroup.Item>Driver: {firstDriverName} <br />Points: {firstDriverPoints}</ListGroup.Item>
                <ListGroup.Item>Driver: {secondDriverName} <br />Points: {secondDriverPoints}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button onClick={() => onDeleteClick(id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default FantasyLeagueCard