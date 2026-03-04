import './App.css';
import Header from './components/Header/Header';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Races from './components/Races/Races';
import StandingsMen from './components/StandingsMen/StandingsMen';
import StandingsWomen from './components/StandingsWomen/StandingsWomen';

function App() {
  return (
    <>
      <Header />
      <div className="score">
        <StandingsMen />
        <Races />
        <StandingsWomen />
      </div>

      <LeftSideBar />
      <footer>
        <div>Sponsors</div>
        <div>
          <div>Logo</div>
          <div>© 2006-2026</div>
          <div>Text</div>
        </div>
      </footer>
    </>
  );
}

export default App;
