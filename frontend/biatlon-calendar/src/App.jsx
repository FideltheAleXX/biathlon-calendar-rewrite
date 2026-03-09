import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Races from './components/Races/Races';
import RightSideBar from './components/RightSideBar/RightSideBar';
import StandingsMen from './components/StandingsMen/StandingsMen';
import StandingsWomen from './components/StandingsWomen/StandingsWomen';

function App() {
  return (
    <>
      <Header />
      <div className="score">
        <div className="left-side">
          <StandingsMen />
          <LeftSideBar />
        </div>
        <Races />
        <div className="right-side">
          <StandingsWomen />
          <RightSideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
