import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Homilies from './components/Homilies.jsx';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Obit" />
        <Route path="/Homilies" element={<Homilies />}/>
      </Routes>
    </>
  )
}

export default App;
