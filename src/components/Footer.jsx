import { Facebook, Instagram, MessageCircle } from "lucide-react"
import { NavLink } from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-white ">
        <nav className="flex justify-between p-4 m-4 ">
          <div className="flex gap-4">
            <NavLink to="/footer/dondeEncontrarnos" >¿Donde encontrarnos?</NavLink>
            <NavLink to="/footer/preguntas">Preguntas Frecuentes</NavLink>
          </div>
          <div className="flex gap-4">
            <NavLink to="/whatsApp">{<MessageCircle/>}</NavLink>
            <NavLink to="/facebook">{<Facebook/>} </NavLink>
            <NavLink to="/instagram">{<Instagram/>} </NavLink>
          </div> 
        </nav>
    </footer>
  
  )
}

export default Footer