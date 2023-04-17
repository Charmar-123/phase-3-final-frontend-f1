import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const DriverCard = ({id, name, points, position, wins, image_url}) => {
  return (
    <Card border="warning" style={{ width: '18rem', marginLeft: "0.5rem" , marginRight: "0.5rem"}}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Position: {position}</ListGroup.Item>
        <ListGroup.Item>Points: {points}</ListGroup.Item>
        <ListGroup.Item>Wins: {wins}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default DriverCard