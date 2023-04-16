import DriverCard from "./DriverCard"
import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"


const DriverStandingsCards = ({driverStandings}) => {

    // const [driverStandings, setDriverStandings] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/driverstandings')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setDriverStandings(data)})

    // }, [])

    const driverStandingsCards = driverStandings.map(({ id, name, points, position, wins, image_url }) => {
    
        return (
            

            < DriverCard
                key={id}
                name={name}
                image_url={image_url}

            />
        )
    })

    return (
        <Row  xs={1} md={2} className="g-4 justify-content-center" >
        {driverStandingsCards}
        </Row>
    )
}

export default DriverStandingsCards