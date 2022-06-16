import './App.css';
import Intro from "./components/Intro";
import ApiConnector from "./components/ApiConnector";

function App() {
  return (
    <div className="App">
      <header className="App-header"><h1>Seguidor de precios 1.0</h1></header>

        <div className="Weno">
            <Intro />
        </div>

        <div className="Weno">
            <ApiConnector />
        </div>
    </div>
  );
}

export default App;
