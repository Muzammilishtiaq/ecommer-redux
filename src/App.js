import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Screen/Home';
import Product from './Screen/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Product} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
