import './App.css';
import CharacterGrid from './components/CharacterGrid';

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <span className="title-dragon">Dragon</span>
          <span className="title-ball">Ball</span>
          <span className="title-api">Universe</span>
        </h1>
      </header>
      <main>
        <CharacterGrid />
      </main>
    </div>
  );
}