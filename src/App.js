import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container />
      </div>
    </Router>

  );
}


export default App;
