import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"

// Components Import
import NavigationBar from './components/NavigationBar';
import DriverStandingsCards from './components/DriverStandingsCards';
import TeamPrincipleStandingsCards from './components/TeamPrincipleStandingsCards';
import ConstructorStandings from './components/ConstructorStandings';
import CreateTeams from './components/CreateTeams';

const App = () => {

  const [driverStandings, setDriverStandings] = useState([])
  const [teamPrincipleStandings, setTeamPrincipleStandings] = useState([])
  const [constructorStandings, setConstructorStandings] = useState([])
  const [fantasyLeagueTeams, setFantasyLeagueTeams] = useState([])

  // Fetch for driver standings
  useEffect(() => {
    fetch('http://localhost:9292/driverstandings')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setDriverStandings(data)
      })

    // Fetch for team principle standings

    fetch("http://localhost:9292/team_principles")
      .then(res => res.json())
      .then(data => {
        setTeamPrincipleStandings(data.sort((a, b) => a.constructor.position - b.constructor.position))
      })

    // Fetch for constructor standings
    fetch("http://localhost:9292/constructors")
      .then(res => res.json())
      .then(data => {
        setConstructorStandings(data)
      })
    fetch('http://localhost:9292/fantasy_league')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setFantasyLeagueTeams(data)
      })

  }, [])

  // For fantasy league set

  const handlePostData = (data) => {
    setFantasyLeagueTeams([...fantasyLeagueTeams, data])
  }

  return (
    <>
      <NavigationBar />
      {/* <DriverStandingsCards  driverStandings={driverStandings}/> */}
      {/* <TeamPrincipleStandingsCards teamPrincipleStandings={teamPrincipleStandings}/> */}
      {/* <ConstructorStandings constructorStandings={constructorStandings}/> */}
      <CreateTeams handlePostData={handlePostData} fantasyLeagueTeams={fantasyLeagueTeams} driverStandings={driverStandings} teamPrincipleStandings={teamPrincipleStandings} constructorStandings={constructorStandings} />
    </>

  );
}

export default App;
