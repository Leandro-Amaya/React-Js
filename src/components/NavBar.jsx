import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
function Navbar() {
    return (
          <nav className="flex items-center gap-5 p-2 m-4 space-x-5 text-white">
             <NavLink to="/category/remeras">Remeras</NavLink>
             <NavLink to="/category/pantalones">Pantalones</NavLink>
             <NavLink to="/category/abrigos">Abrigos</NavLink>
             <NavLink to="/category/calzado" >Calzado</NavLink>
             <NavLink to="/carrito" >{<CartWidget/>}</NavLink>
          </nav>
     
    )
}

export default Navbar//
  