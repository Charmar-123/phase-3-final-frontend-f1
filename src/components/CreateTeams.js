// React-bootstrap components imports

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Card, ListGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import { useEffect, useState } from 'react';

import FantasyLeagueCard from './FantasyLeagueCard';


const CreateTeams = ({ driverStandings, teamPrincipleStandings, constructorStandings }) => {

    const [fantasyLeagueTeams, setFantasyLeagueTeams] = useState([])


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
                
                setFantasyLeagueTeams([...fantasyLeagueTeams, data])
                console.log(fantasyLeagueTeams);
            });
    };

    const handleChange= (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const fantasyLeagueTeamCards = fantasyLeagueTeams.map(({id, team_principle_id, constructor_id, first_driver_id, second_driver_id}) => {
        const teamPrincipleName = teamPrincipleStandings.filter(t => t.id == team_principle_id)
        
        const constructorName = constructorStandings.filter(t => t.id == constructor_id)
        const firstDriverName = driverStandings.filter(t => t.id == first_driver_id)
        const secondDriverName = driverStandings.filter(t => t.id == second_driver_id)
        console.log(secondDriverName[0].name);
        return(
            <FantasyLeagueCard
            key={id}
            teamPrincipleName={teamPrincipleName[0].name}
            constructorName={constructorName[0].name}
            firstDriverName={firstDriverName[0].name}
            secondDriverName={secondDriverName[0].name}
            />
        )

    })


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

                                    <Form.Select name='team_principle_id' onChange={handleChange} aria-label="Default select example">
                                        <option>Select Team Principle</option>
                                        {teamPrincipleChoices}
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Select name='constructor_id'  onChange={handleChange} aria-label="Default select example">
                                        <option>Select Constructor</option>
                                        {constructorStandingsChoices}
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row className="justify-content-center">
                                        <Form.Select name='first_driver_id'  onChange={handleChange} aria-label="Default select example" style={{ width: '10rem' }}>
                                            <option>First Driver</option>
                                            {driverStandingsChoices}
                                        </Form.Select>
                                        <Form.Select name='second_driver_id'  onChange={handleChange} aria-label="Default select example" style={{ marginLeft: "4rem", width: '10rem' }}>
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
                <Row>
                    {fantasyLeagueTeamCards}
                </Row>
            </Col>


        </Container >
    )
}

export default CreateTeams