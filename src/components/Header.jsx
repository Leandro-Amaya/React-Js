import { Link } from "react-router-dom"
import Navbar from "./NavBar"

function Header() {
  return (
    <header className="flex justify-between bg-black">
      <Link to="/"><img src="/logo-chico.jpg" alt="logo de la empresa"/></Link>
      <Navbar/>
    </header>
    
  )
}

export default Header