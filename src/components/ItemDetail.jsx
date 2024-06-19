
function ItemDetail({productos}) {
  return (
    <section>
         {productos.map((producto,indice) =>{
           return(
            <div key={indice} className="grid grid-cols-2 grid-rows-3 gap-4 p-4 m-4 bg-white w-max-full">
              <h1 className="col-span-2 text-xl text-center">{producto.nombre}</h1>
              <p className="">${producto.precio}</p>
              <img src={producto.img} alt={producto.nombre} className="w-48 h-48 row-span-2 col-star-2"/>
              <p>{producto.stock} unidades disponibles</p>
              <button className="p-2 text-white bg-black border border-black w-max">Comprar</button>
            </div>
           );
         })}
    </section>
  )
}

export default ItemDetail
