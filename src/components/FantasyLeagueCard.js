import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const FantasyLeagueCard = ({teamPrincipleName, constructorName, firstDriverName,secondDriverName, image_url, constuctorPoints, firstDriverPoints, secondDriverPoints}) => {
  return (
    <Card border="warning" style={{ width: '18rem', marginLeft: "0.5rem" , marginRight: "0.5rem"}}>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title>Team Principle: {teamPrincipleName}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Constructor: {constructorName} <br /> Points: {constuctorPoints}</ListGroup.Item>
      <ListGroup.Item>Driver: {firstDriverName} <br />Points: {firstDriverPoints}</ListGroup.Item>
      <ListGroup.Item>Driver: {secondDriverName} <br />Points: {secondDriverPoints}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Button href="#">Card Link</Button>
      <Button href="#">Another Link</Button>
    </Card.Body>
  </Card>
  )
}

export default FantasyLeagueCard