
import Button from "./Button.jsx"
function ItemList({productos}) {
  return (
      <section className="grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productos.map((producto,indice) =>{
          return(
            <article key={indice} className="p-4 m-4 text-black bg-white">
               <h2>{producto.nombre}</h2>
               <p>${producto.precio}</p>
               <img src={producto.img} alt={producto.nombre} />
               <Button id={producto.nombre} />
            </article>
          )
          })}
      </section>
  )
}
export default ItemList