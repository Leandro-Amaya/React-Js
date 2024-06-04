import CartWidget from "./CartWidget"

function Navbar() {
    return (
          <nav className="flex items-center m-4 p-2 space-x-5 bg-white">
             <a href="#">Indumentaria</a>
             <a href="#">Calzado</a>
             <a href="#">¿Donde encontrarnos?</a>
             <a href="#">Contactanos</a>
             <a href="#">Preguntas Frecuentes</a>
             <CartWidget/>
          </nav>
     
    )
}

export default Navbar
  