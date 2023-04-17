import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import { Form } from 'react-bootstrap';

const FantasyLeagueCard = ({ id, teamPrincipleName, constructorName, firstDriverName, secondDriverName, image_url, firstDriverPoints, secondDriverPoints, handleDeleteCard, teamPrincipleChoices, handleUpdateCard, constructorStandingsChoices, driverStandingsChoices, constructorID, teamPrincipleID, firstDriverID,secondDriverID   }) => {

    const [isEdit, setIsEdit] = useState(false)

    const [formData, setFormData] = useState()

    const onDeleteClick = (id) => {
        fetch('http://localhost:9292/fantasy_league/' + id, {
            method: 'DELETE',
        })
        handleDeleteCard(id)

    }

    const setInitialValues = () => {
        setFormData({team_principle_id: teamPrincipleID,
        constructor_id: constructorID,
        first_driver_id: firstDriverID, second_driver_id: secondDriverID })
    }

    const handleChange= (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: parseInt(value)});
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/fantasy_league/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                team_principle_id: formData.team_principle_id,
                constructor_id: formData.constructor_id,
                first_driver_id: formData.first_driver_id,
                second_driver_id: formData.second_driver_id
            }),
        })
            .then((r) => r.json())
            .then((updatedCard) =>{ 
                handleUpdateCard(updatedCard)
                setIsEdit(false)});
    }


    return (
        <Card border="warning" style={{ width: '18rem', marginLeft: "0.5rem", marginRight: "0.5rem" }}>
            <Card.Img variant="top" src={image_url} />
            <Form onSubmit={handleSubmit}>
                <Card.Body>
                    <Card.Title>Team Principle: {teamPrincipleName}
                        {isEdit ? <Form.Select name='team_principle_id' onChange={handleChange}>{[...teamPrincipleChoices, <option selected
                     value={teamPrincipleID}>{teamPrincipleName}</option>]}</Form.Select> : ""}
                    </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">

                    <ListGroup.Item>Constructor: {constructorName} <br /> Points: {firstDriverPoints + secondDriverPoints} 
                    {isEdit ? <Form.Select name='constructor_id' onChange={handleChange}>{[...constructorStandingsChoices, <option selected
                     value={constructorID}>{constructorName}</option>]} </Form.Select> : ""}
                     </ListGroup.Item>

                    <ListGroup.Item>Driver: {firstDriverName} <br />Points: {firstDriverPoints} 
                    {isEdit ? <Form.Select name='first_driver_id' onChange={handleChange}>{[...driverStandingsChoices, <option selected
                     value={firstDriverID}>{firstDriverName}</option> ]}
                    </Form.Select> : ""}
                    </ListGroup.Item>

                    <ListGroup.Item>Driver: {secondDriverName} <br />Points: {secondDriverPoints} <br />
                    {isEdit ? <Form.Select name='second_driver_id' onChange={handleChange}>{[...driverStandingsChoices, <option selected
                     value={secondDriverID}>{secondDriverName}</option> ]}
                    </Form.Select> : ""}
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => onDeleteClick(id)}>Delete</Button>
                    <Button type='submit' >Save</Button>
                    <Button onClick={() => {
                        setInitialValues()
                        setIsEdit(true)}}>Edit</Button>
                    {/* {isEdit ? <Button type='submit' >Save</Button> : <Button onClick={() => setIsEdit(true)}>Edit</Button>} */}


                </Card.Body>
            </Form>
        </Card>
    )
}

export default FantasyLeagueCard