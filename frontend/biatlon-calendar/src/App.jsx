import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import Races from './components/Races/Races';
import RightSideBar from './components/RightSideBar/RightSideBar';
import Standings from './components/Standings/Standings';
import { menAthletes, womenAthletes } from '../public/data/athletes';

function App() {
  return (
    <>
      <Header />
      <div className="score">
        <div className="left-side">
          <Standings title="Men`s Score" athletes={menAthletes} />
          <LeftSideBar />
        </div>
        <Races />
        <div className="right-side">
          <Standings title="Women`s Score" athletes={womenAthletes} />
          <RightSideBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
