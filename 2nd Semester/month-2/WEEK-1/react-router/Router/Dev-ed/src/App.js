import "./App.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes path="/about" element={<About />} />
        <About />
        <Shop />
      </Router>
    </div>
  );
}

export default App;
