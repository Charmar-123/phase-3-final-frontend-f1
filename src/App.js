import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components Import
import NavigationBar from './components/NavigationBar';
import DriverStandingsCards from './components/DriverStandingsCards';
import TeamPrincipleStandingsCards from './components/TeamPrincipleStandingsCards';

const App = () => {
  return (
    <>
        <NavigationBar/>
        {/* <DriverStandingsCards/> */}
        <TeamPrincipleStandingsCards/>
    </>

  );
}

export default App;
