
import ConstructorCard from "./ConstructorCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";


const ConstructorStandings  = ({constructorStandings}) => {

    // const [constructorStandings, setConstructorStandings] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:9292/constructors")
    //         .then(res => res.json())
    //         .then(data => {
    //             setConstructorStandings(data)
    //         })

    // }, [])

    const constructorStandingsCards = constructorStandings.map(({ id, name,constructor, image_url }) => {
        return (
            <ConstructorCard
            key={id}
            name={name}
            constructorName={constructor.name}
            constructorPoints={constructor.points}
            constructorPosition={constructor.position}
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