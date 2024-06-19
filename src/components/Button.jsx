import { Link } from "react-router-dom"
function Button({id}) {
  return (
    <Link to={`/item/${id}`} className="p-2 text-white bg-black border border-black">Ver detalle</Link>
  )
}

export default Button