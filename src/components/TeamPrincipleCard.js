import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const TeamPrincipleCard = ({ id, name,constructorName, constructorPoints, constructorPosition, image_url, nationality }) => {
  return (
    <Card border="warning" style={{ width: '18rem', marginLeft: "0.5rem" , marginRight: "0.5rem"}}>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{nationality}</Card.Subtitle>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Constructor: {constructorName}</ListGroup.Item>
      <ListGroup.Item>Points: {constructorPoints}</ListGroup.Item>
      <ListGroup.Item>Position: {constructorPosition}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Button href="#">Card Link</Button>
      <Button href="#">Another Link</Button>
    </Card.Body>
  </Card>
  )
}

export default TeamPrincipleCard