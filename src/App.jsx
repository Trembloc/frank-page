import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Test from './components/Test.jsx';
import Homilies from './components/Homilies.jsx';
import Advent1 from './components/homily-links/Advent1.jsx';
import Advent2 from './components/homily-links/Advent2.jsx';
import Advent3 from './components/homily-links/Advent3.jsx';
import Advent4 from './components/homily-links/Advent4.jsx';
import Allsaints from './components/homily-links/Allsaintsday.jsx';
import Allsoulsday from './components/homily-links/Allsoulsday.jsx';
import Ascensionsunday from './components/homily-links/Ascensionsunday.jsx';
import Ashwednesday from './components/homily-links/Ashwednesday.jsx';
import Assumption from './components/homily-links/Assumption.jsx';
import Baptismoflord from './components/homily-links/Baptismoflord.jsx';
import Birthofjohnthebaptist from './components/homily-links/Birthofjohnthebaptist.jsx';
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
        <Route path="/Advent2" element={<Advent2 />} />
        <Route path="/Advent3" element={<Advent3 />} />
        <Route path="/Advent4" element={<Advent4 />} />
        <Route path="/Allsaints" element={<Allsaints />} />
        <Route path="/Allsoulsday" element={<Allsoulsday />} />
        <Route path="/Ascension" element={<Ascensionsunday />} />
        <Route path="/Ashwednesday" element={<Ashwednesday />} />
        <Route path="/Assumption" element={<Assumption />} />
        <Route path="/Baptism" element={<Baptismoflord />} />
        <Route path="/Birth" element={<Birthofjohnthebaptist />} />
      </Routes>
    </>
  )
}

export default App;
