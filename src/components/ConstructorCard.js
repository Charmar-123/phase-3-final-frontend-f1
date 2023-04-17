import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const ConstructorCard = ({ id, name, points, position, nationality, image_url }) => {
  return (
    <Card border="warning" style={{ width: '18rem', marginLeft: "0.5rem" , marginRight: "0.5rem"}}>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{nationality}</Card.Subtitle>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Position: {position}</ListGroup.Item>
      <ListGroup.Item>Points: {points}</ListGroup.Item>
    </ListGroup>
  </Card>
  )
}

export default ConstructorCard