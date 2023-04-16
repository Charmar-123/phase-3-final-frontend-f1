import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components Import
import NavigationBar from './components/NavigationBar';
import DriverStandingsCards from './components/DriverStandingsCards';
import TeamPrincipleStandingsCards from './components/TeamPrincipleStandingsCards';
import ConstructorStandings from './components/ConstructorStandings';
import CreateTeams from './components/CreateTeams';

const App = () => {
  return (
    <>
        <NavigationBar/>
        {/* <DriverStandingsCards/> */}
        {/* <TeamPrincipleStandingsCards/> */}
        {/* <ConstructorStandings/> */}
        <CreateTeams/>
    </>

  );
}

export default App;
