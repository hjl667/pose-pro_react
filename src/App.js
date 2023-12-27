import logo from './logo.svg';
import './App.css';
import Analytics from "./pages/Analytics"
import Navbar from "./Navbar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import PowerUp from "./pages/PowerUp"


function App() {
  return (
      <>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/powerup" element={<PowerUp />} />
          </Routes>
        </div>
      </>
  );
}

export default App;
