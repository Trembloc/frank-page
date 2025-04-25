import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Test from './components/Test.jsx';
import Homilies from './components/Homilies.jsx';
import Advent1 from './components/homily-links/Advent1.jsx';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Obit" />
        <Route path="/Homilies" element={<Homilies />}/>
        <Route path="/Test" element={<Test />} />
        <Route path="/Advent1" element={<Advent1 />} />
      </Routes>
    </>
  )
}

export default App;
