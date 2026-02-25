import './App.css';
import Header from './components/Header/Header';
import StandingsMen from './components/StandingsMen/StandingsMen';
import StandingsWomen from './components/StandingsWomen/StandingsWomen';

function App() {
  return (
    <>
      <Header />
      <div className="score">
        <StandingsMen />
        <StandingsWomen />
      </div>

      <main>Races</main>
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
