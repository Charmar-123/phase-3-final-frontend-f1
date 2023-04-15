import DriverCard from "./DriverCard"
import { useEffect, useState } from "react"


const DriverStandingsCards = () => {

    useEffect(() => {
        fetch('http://localhost:9292/driverstandings')
        .then(res => res.json())
        .then(data => console.log(data))

    }, [])

  return (
    <h1></h1>
  )
}

export default DriverStandingsCards