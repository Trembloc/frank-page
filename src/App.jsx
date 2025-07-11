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
import O14th from './components/homily-links/O14th.jsx';
import O15th from './components/homily-links/O15th.jsx';
import O16th from './components/homily-links/O16th.jsx';
import O17th from './components/homily-links/O17th.jsx';
import O18th from './components/homily-links/O18th.jsx';
import O19th from './components/homily-links/O19th.jsx';
import O20th from './components/homily-links/O20th.jsx';
import O21st from './components/homily-links/O21st.jsx';
import O22nd from './components/homily-links/O22nd.jsx';
import O23rd from './components/homily-links/O23rd.jsx';
import O24th from './components/homily-links/O24th.jsx';
import O25th from './components/homily-links/O25th.jsx';
import O26th from './components/homily-links/O26th.jsx';
import O27th from './components/homily-links/O27th.jsx';
import O28th from './components/homily-links/O28th.jsx';
import O29th from './components/homily-links/O29th.jsx';
import O30th from './components/homily-links/O30th.jsx';
import O31st from './components/homily-links/O31th.jsx';
import O32nd from './components/homily-links/O32th.jsx';
import O33rd from './components/homily-links/O33th.jsx';
import O34th from './components/homily-links/O34th.jsx';
import Oljckingoftheuniverse from './components/homily-links/Oljckingoftheuniverse.jsx';
import PalmSunday from './components/homily-links/Palmsunday.jsx';
import Pentecost from './components/homily-links/Pentacost.jsx';
import PentecostVigil from './components/homily-links/Pentacostsunday.jsx';
import Presentation from './components/homily-links/Presentation.jsx';
import SacredHeart from './components/homily-links/Sacredheart.jsx';
import PandP from './components/homily-links/Saintspeterandpaul.jsx';
import Easter2 from './components/homily-links/Secondofeastersunday.jsx';
import Easter3 from './components/homily-links/Thirdofeastersunday.jsx';
import FirstLent from './components/homily-links/Firstsundayoflent.jsx';
import FifthLent from './components/homily-links/Fifthsundayoflent.jsx';
import ThirdLent from './components/homily-links/Thirdsundayoflent.jsx';
import SecondLent from './components/homily-links/Secondsundayoflent.jsx';
import FourthLent from './components/homily-links/Fourthsundayoflent.jsx';
import Easter7 from './components/homily-links/Seventhofeastersunday.jsx';
import Easter4 from './components/homily-links/Fourthofeastersunday.jsx';
import Easter5 from './components/homily-links/Fifthofeastersunday.jsx';
import Easter6 from './components/homily-links/Sixthofeastersunday.jsx';
import Easter from './components/homily-links/Eastersunday.jsx';
import Funerals from './components/homily-links/Funerals.jsx';
import MaryMotherOfGod from './components/homily-links/Marymotherofgod.jsx';
import Thanksgiving from './components/homily-links/Thanksgiving.jsx';
import Transfiguration from './components/homily-links/Transfiguration.jsx';
import HolySaturdayMornPrayer from './components/homily-links/Holysaturday.jsx';
import GoodFriday from './components/homily-links/Goodfriday.jsx';
import HolyThursday from './components/homily-links/Holythursday.jsx';
import TrinitySunday from './components/homily-links/Themostholytrinity.jsx';
import CorpusChristi from './components/homily-links/Corpuschristi.jsx';
import Exaltation from './components/homily-links/Exaltationoftheholycross.jsx';
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
        <Route path="/O14th" element={<O14th />} />
        <Route path="/O15th" element={<O15th />} />
        <Route path="/O16th" element={<O16th />} />
        <Route path="/O17th" element={<O17th />} />
        <Route path="/O18th" element={<O18th />} />
        <Route path="/O19th" element={<O19th />} />
        <Route path="/O20th" element={<O20th />} />
        <Route path="/O21st" element={<O21st />} />
        <Route path="/O22nd" element={<O22nd />} />
        <Route path="/O23rd" element={<O23rd />} />
        <Route path="/O24th" element={<O24th />} />
        <Route path="/O25th" element={<O25th />} />
        <Route path="/O26th" element={<O26th />} />
        <Route path="/O27th" element={<O27th />} />
        <Route path="/O28th" element={<O28th />} />
        <Route path="/O29th" element={<O29th />} />
        <Route path="/O30th" element={<O30th />} />
        <Route path="/O31st" element={<O31st />} />
        <Route path="/O32nd" element={<O32nd />} />
        <Route path="/O33rd" element={<O33rd />} />
        <Route path="/O34th" element={<O34th />} />
        <Route path="/OLJC" element={<Oljckingoftheuniverse />} />
        <Route path="/PalmSunday" element={<PalmSunday />} />
        <Route path="/PentecostSunday" element={<Pentecost/>} />
        <Route path="/PentecostVigil" element={<PentecostVigil/>} />
        <Route path="/Presentation" element={<Presentation/> } />
        <Route path="/Sacredheart" element={<SacredHeart/> } />
        <Route path="/PandP" element={<PandP/> } />
        <Route path="/easter2" element={<Easter2 /> } />
        <Route path="/easter3" element={<Easter3 /> } />
        <Route path="/FirstLent" element={<FirstLent /> } />
        <Route path="/FifthLent" element={<FifthLent /> } />
        <Route path="/ThirdLent" element={<ThirdLent /> } />
        <Route path="/SecondLent" element={<SecondLent /> } />
        <Route path="/FourthLent" element={<FourthLent /> } />
        <Route path="/easter7" element={<Easter7 /> } />
        <Route path="/easter4" element={<Easter4 /> } />
        <Route path="/easter5" element={<Easter5/> } />
        <Route path="/easter6" element={<Easter6/> } />
        <Route path="/easter" element={<Easter/> } />
        <Route path="/Funerals" element={<Funerals/> } />
        <Route path="/MMG" element={<MaryMotherOfGod/> } />
        <Route path="/Thanksgiving" element={<Thanksgiving/> } />
        <Route path="/Transfiguration" element={<Transfiguration/> } />
        <Route path="/HolySaturday" element={<HolySaturdayMornPrayer/> } />
        <Route path="/GoodFriday" element={<GoodFriday/> } />
        <Route path="/HolyThursday" element={<HolyThursday/> } />
        <Route path="/TrinitySunday" element={<TrinitySunday/> } />
        <Route path="/CorpusChristi" element={<CorpusChristi/> } />
        <Route path="/Exaltation" element={<Exaltation/> } />
      </Routes>
    </>
  )
}

export default App;
