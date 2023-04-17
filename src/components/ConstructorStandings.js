
import ConstructorCard from "./ConstructorCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";


const ConstructorStandings  = ({constructorStandings}) => {

    console.log(constructorStandings);
    const constructorStandingsCards = constructorStandings.map(({ id, name, nationality, position, points, image_url }) => {
        
        return (
            <ConstructorCard
            key={id}
            name={name}
            nationality={nationality}
            position={position}
            points={points}
            image_url={image_url}
            />
        )
    })
    return (

        <Row  xs={1} md={2} className="g-4 justify-content-center" >
         
         { constructorStandingsCards }
        </Row>
    )
}

export default ConstructorStandings