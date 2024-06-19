import Carrito from "./Carrito";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import {Route,Routes} from "react-router-dom";
function Main() {
  return (
    <main className="grow">
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </main>
  )
}

export default Main 

