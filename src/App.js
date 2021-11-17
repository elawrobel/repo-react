import './App.css';

import Zadanie1 from './components/Zadanie1';


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Hello World</h1>
      </header>
      <section>
        <h2>2. Komponenty</h2>
        <div className="section">
          <h3>Zadanie 1</h3>
          <Zadanie1 />
        </div>
      </section>
    </div>
  );
}

export default App;
