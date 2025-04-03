import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="https://www.kraw-kornackfuneralhome.com/obituaries/francis-frank-tremblay/#!/Obituary">Obit</Link>
      <Link to="Homilies">Homilies</Link>
      <Link to="Test">Test</Link>
    </div>
  )
}

export default Navbar;