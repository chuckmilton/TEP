import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Bias from './pages/Bias';
import Framework from './pages/Framework';
import Policy from './pages/Policy';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/bias" element={<Bias />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
