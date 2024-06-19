import { ShoppingCart } from "lucide-react";

function CartWidget() {
    return (
        <div className="flex items-center space-x-2">
         <ShoppingCart/>
         <p className = ""> 3 </p>  
        </div>
    )
}

export default CartWidget;