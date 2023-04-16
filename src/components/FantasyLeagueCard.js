import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const FantasyLeagueCard = ({teamPrincipleName, image_url}) => {
  return (
    <Card border="warning" style={{ width: '18rem', marginLeft: "0.5rem" , marginRight: "0.5rem"}}>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title>{teamPrincipleName}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Button href="#">Card Link</Button>
      <Button href="#">Another Link</Button>
    </Card.Body>
  </Card>
  )
}

export default FantasyLeagueCard