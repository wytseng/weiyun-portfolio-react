import NavMenu from './components/NavMenu';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
