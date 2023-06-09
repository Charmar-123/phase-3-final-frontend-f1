import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"

// Components Import
import NavigationBar from './components/NavigationBar';
import DriverStandingsCards from './components/DriverStandingsCards';
import TeamPrincipleStandingsCards from './components/TeamPrincipleStandingsCards';
import ConstructorStandings from './components/ConstructorStandings';
import CreateTeams from './components/CreateTeams';


// React - Router

import { Routes, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

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

  // Delete fantasy league team 

  const handleDeleteCard = (id) => {
    const updatedFantasyLeague = fantasyLeagueTeams.filter(
      (card) => card.id !== id)
    setFantasyLeagueTeams(updatedFantasyLeague);
  }

  function handleUpdateCard(updatedCardObj) {
    const updatedCards = fantasyLeagueTeams.map((fantasyLeagueTeam) => {
      if (fantasyLeagueTeam.id === updatedCardObj.id) {
        return updatedCardObj;
      } else {
        return fantasyLeagueTeam;
      }
    });
    setFantasyLeagueTeams(updatedCards);
  }

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route exact path='/'
          element={<ConstructorStandings constructorStandings={constructorStandings} />} />
          

        <Route path='/driver_standings' element={<DriverStandingsCards driverStandings={driverStandings} />}/>


        <Route path='/team_principles' element={ <TeamPrincipleStandingsCards teamPrincipleStandings={teamPrincipleStandings} />} />
       

        <Route path='/create_teams' element={<CreateTeams handleUpdateCard={handleUpdateCard} handleDeleteCard={handleDeleteCard} handlePostData={handlePostData} fantasyLeagueTeams={fantasyLeagueTeams} driverStandings={driverStandings} teamPrincipleStandings={teamPrincipleStandings} constructorStandings={constructorStandings} />} />


      </Routes>

    </>

  );
}

export default App;
