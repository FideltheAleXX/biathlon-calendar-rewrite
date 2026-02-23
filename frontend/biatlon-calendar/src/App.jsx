import './App.css';
import Header from './components/Header/Header';
import StandingsMen from './components/StandingsMen/StandingsMen';

function App() {
  return (
    <>
      <Header />
      <StandingsMen />

      <aside>Winners woman</aside>
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
