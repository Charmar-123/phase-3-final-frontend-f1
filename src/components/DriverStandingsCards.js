import DriverCard from "./DriverCard"
import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"


const DriverStandingsCards = () => {

    const [driverStandings, setDriverStandings] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/driverstandings')
            .then(res => res.json())
            .then(data => setDriverStandings(data))

    }, [])

    const driverStandingsCards = driverStandings.map(({ id, name, points, position, wins }) => {
        return (

            < DriverCard
                key={id}
                name={name}

            />
        )
    })

    return (
        <Row>
        {driverStandingsCards}
        </Row>
    )
}

export default DriverStandingsCards