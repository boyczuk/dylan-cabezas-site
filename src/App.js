import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import Info from './pages/Info';
import Navbar from './components/Navbar';
import Photography from './pages/Photography';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/info" element={<Info />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
