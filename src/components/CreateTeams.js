// React-bootstrap components imports

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Card, ListGroup } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';

import { useEffect, useState } from 'react';


const CreateTeams = ({driverStandings, teamPrincipleStandings, constructorStandings }) => {

    const teamPrincipleChoices = teamPrincipleStandings.map(({id,name}) => 
    {
        return (
            <option
            key={id}
            value={id}>
              {name} 
            </option>
        )
    }
    )

    const constructorStandingsChoices = constructorStandings.map(({id,name}) => 
    {
        return (
            <option
            key={id}
            value={id}>
              {name} 
            </option>
        )
    }
    )

    const driverStandingsChoices = driverStandings.map(({id,name}) => 
    {
        return (
            <option
            key={id}
            value={id}>
              {name} 
            </option>
        )
    }
    )
    return (
        <Container>

            <Col>
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                    <Card.Title>Create your own F1 fantasy league!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Select a Team Principle, Constructor, and Drivers.</Card.Subtitle>
                    <ListGroup>
                        <ListGroup.Item>
                            <Form.Select aria-label="Default select example">
                                <option>Select Team Principle</option>
                                {teamPrincipleChoices}
                            </Form.Select>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Select aria-label="Default select example">
                                <option>Select Constructor</option>
                                {constructorStandingsChoices}
                            </Form.Select>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className="justify-content-center">
                            <Form.Select aria-label="Default select example" style={{width: '10rem'}}>
                                <option>First Driver</option>
                                {driverStandingsChoices}
                            </Form.Select>
                            <Form.Select aria-label="Default select example" style={{marginLeft: "4rem", width: '10rem' }}>
                                <option>Second Driver</option>
                                {driverStandingsChoices}
                            </Form.Select>
                            </Row>
    
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            </Col>


        </Container>
    )
}

export default CreateTeams