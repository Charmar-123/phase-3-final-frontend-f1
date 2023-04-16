import TeamPrincipleCard from "./TeamPrincipleCard";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";


const TeamPrincipleStandingsCards = ({teamPrincipleStandings}) => {

    // const [teamPrincipleStandings, setTeamPrincipleStandings] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:9292/team_principles")
    //         .then(res => res.json())
    //         .then(data => {
    //             setTeamPrincipleStandings(data.sort((a,b)=>a.constructor.position-b.constructor.position))
    //         })

    // }, [])

    const teamPrincipleStandingsCards = teamPrincipleStandings.map(({ id, name,constructor, image_url }) => {
        return (
            <TeamPrincipleCard
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
         
         { teamPrincipleStandingsCards }
        </Row>
    )
}

export default TeamPrincipleStandingsCards