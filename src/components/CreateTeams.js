// React-bootstrap components imports

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Card, ListGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import { useEffect, useState } from 'react';


const CreateTeams = ({ driverStandings, teamPrincipleStandings, constructorStandings }) => {

    // const [teamPrincipleChoices, setTeamPrincipleChoices] = useState([])


    const teamPrincipleChoices = teamPrincipleStandings.map(({ id, name }) => {
        return (
            <option
            className=''
                key={id}
                value={id}>
                {name}
            </option>
        )
    }
    )

    const constructorStandingsChoices = constructorStandings.map(({ id, name }) => {
        return (
            <option
            className=''
                key={id}
                value={id}
                >
                {name}
            </option>
        )
    }
    )

    const driverStandingsChoices = driverStandings.map(({ id, name }) => {
        return (
            <option
            className=''
                key={id}
                value={id}>
                {name}
            </option>
        )
    }
    )

    const [formData, setFormData] = useState()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // teamPrincipleChoices = teamPrincipleChoices.filter(choice => choice.props.value != formData.teamPrincipleID)
    //     // console.log(teamPrincipleChoices);
    //     // teamPrincipleChoices.forEach(choice => {
    //     //     if (formData.teamPrincipleID == choice.props.value){
    //     //         choice.props.className = "hide_option"
    //     //         console.log(choice.props.className);
                
    //     //     }
    //     //     // console.log(teamPrincipleChoices);
    //     // });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9292/fantasy_league", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData
            }),
          })
            .then((r) => r.json())
            .then((data) => {

            });
    };

    const handleChangeTeamPrinciple = (e) => {
        const { name, value, label } = e.target;
        setFormData({ ...formData, [name]: teamPrincipleStandings.filter(t => t.id == value)});
    };
    const handleChangeConstructor = (e) => {
        const { name, value, label } = e.target;
        setFormData({ ...formData, [name]: constructorStandings.filter(t => t.id == value)});
    };
    const handleChangeFirstDriver = (e) => {
        const { name, value, label } = e.target;
        setFormData({ ...formData, [name]: driverStandings.filter(t => t.id == value)});
    };
    const handleChangeSecondDriver = (e) => {
        const { name, value, label } = e.target;
        setFormData({ ...formData, [name]: driverStandings.filter(t => t.id == value)});
    };


    return (
        <Container>

            <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title>Create your own F1 fantasy league!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Select a Team Principle, Constructor, and Drivers.</Card.Subtitle>
                        <Form onSubmit={handleSubmit}>
                            <ListGroup>

                                <ListGroup.Item>

                                    <Form.Select name='teamPrincipleID' onChange={handleChangeTeamPrinciple} aria-label="Default select example">
                                        <option>Select Team Principle</option>
                                        {teamPrincipleChoices}
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Select name='constructorID'  onChange={handleChangeConstructor} aria-label="Default select example">
                                        <option>Select Constructor</option>
                                        {constructorStandingsChoices}
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row className="justify-content-center">
                                        <Form.Select name='firstDriverID'  onChange={handleChangeFirstDriver} aria-label="Default select example" style={{ width: '10rem' }}>
                                            <option>First Driver</option>
                                            {driverStandingsChoices}
                                        </Form.Select>
                                        <Form.Select name='secondDriverID'  onChange={handleChangeSecondDriver} aria-label="Default select example" style={{ marginLeft: "4rem", width: '10rem' }}>
                                            <option>Second Driver</option>
                                            {driverStandingsChoices}
                                        </Form.Select>

                                    </Row>

                                </ListGroup.Item>

                            </ListGroup>
                            <Button type='submit'>Submit</Button>
                        </Form>

                    </Card.Body>
                </Card>
            </Col>


        </Container >
    )
}

export default CreateTeams