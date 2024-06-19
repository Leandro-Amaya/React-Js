import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";


function ItemDetailContainer() {
  const[detalle,setDetalle] = useState([])
  
  const { id: nombre } = useParams();

  useEffect(() =>{
      fetch("/data.json") 
      .then((res)=>{
        return res.json()
       })
       .then((data)=>{
        const productos = data.productos;
        if (nombre) {
          const filteredData = productos.filter((elment) => elment.nombre === nombre);
          setDetalle(filteredData);
        } else {
          setDetalle(productos);
        }
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        
      });
  },[nombre])
  return (
    <>
     <ItemDetail productos={detalle} />
    </>
    
  )
}

export default ItemDetailContainer