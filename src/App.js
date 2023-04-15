import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components Import
import NavigationBar from './components/NavigationBar';
import DriverStandingsCards from './components/DriverStandingsCards';

const App = () => {
  return (
    <>
        <NavigationBar/>
        <DriverStandingsCards/>
    </>

  );
}

export default App;
