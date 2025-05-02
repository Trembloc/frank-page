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
import Holyfamily from './components/homily-links/Holyfamily.jsx';
import Epiphany from './components/homily-links/Epiphany.jsx';
import Christmas from './components/homily-links/Christmas.jsx';
//import Christmasmidnight from './components/homily-links/Christmasmidnight.jsx';
import Christmasdawn from './components/homily-links/Christmasdawn.jsx';
import Christmasvigil from './components/homily-links/Christmasvigil.jsx';
import O2nd from './components/homily-links/O2nd.jsx';
import O3rd from './components/homily-links/O3rd.jsx';
import O4th from './components/homily-links/O4th.jsx';
import O5th from './components/homily-links/O5th.jsx';
import O6th from './components/homily-links/O6th.jsx';
import O7th from './components/homily-links/O7th.jsx';
import O8th from './components/homily-links/O8th.jsx';
import O9th from './components/homily-links/O9th.jsx';
import O10th from './components/homily-links/O10th.jsx';
import O11th from './components/homily-links/O11th.jsx';
import O12th from './components/homily-links/O12th.jsx';
import O13th from './components/homily-links/O13th.jsx';
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
        <Route path="/Holy family" element={<Holyfamily />} />
        <Route path="/Epiphany" element={<Epiphany />} />
        <Route path="/Christmas" element={<Christmas />} />
        {/* <Route path="/Christmasmidnight" element={<Christmasmidnight />} /> */}
        <Route path="/Christmasdawn" element={<Christmasdawn />} />
        <Route path="/Christmasvigil" element={<Christmasvigil />} />
        <Route path="/O2nd" element={<O2nd />} />
        <Route path="/O3rd" element={<O3rd />} />
        <Route path="/O4th" element={<O4th />} />
        <Route path="/O5th" element={<O5th />} />
        <Route path="/O6th" element={<O6th />} />
        <Route path="/O7th" element={<O7th />} />
        <Route path="/O8th" element={<O8th />} />
        <Route path="/O9th" element={<O9th />} />
        <Route path="/O10th" element={<O10th />} />
        <Route path="/O11th" element={<O11th />} />
        <Route path="/O12th" element={<O12th />} />
        <Route path="/O13th" element={<O13th />} />
      </Routes>
    </>
  )
}

export default App;
