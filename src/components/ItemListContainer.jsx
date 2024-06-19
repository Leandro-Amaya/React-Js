import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer() {

  const[product,setProduct] = useState([])
  
  const { id: category } = useParams();

  useEffect(() =>{
      fetch("/data.json") 
      .then((res)=>{
        return res.json()
       })
       .then((data)=>{
        const productos = data.productos;
        if (category) {
          const filteredData = productos.filter((elment) => elment.categoria === category);
          setProduct(filteredData);
        } else {
          setProduct(productos);
        }
        
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        
      });
  },[category])
  return (
    <>
    <div className="flex justify-center">
    <img src="/banner.jpg" alt="banner de la empresa" className="max-w-max"/>
    </div>
    <ItemList productos={product} />
    </>
   
    
  )
}

export default ItemListContainer