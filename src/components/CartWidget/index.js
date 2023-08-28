import { Link } from "react-router-dom";
import CartIcon from "../svg/CartIcon";




const CartWidget = ({ cart, sum }) => {
        return (
      <div className="mx-auto my-5 container flex flex-row-reverse text-right">
        <Link to="/cart">
          <div className="flex justify-end">
            <CartIcon /> X { cart.length} 
          </div>
          <div>Сумма: {sum} руб</div>
        </Link>
      </div>
    );
  };

  export default CartWidget;



// const Corzina = () => { 
// const [cart, setCart] = useState([]);

// const addToCart = (item) => {
//  setCart([...cart, item]);
 
// return (
 
     
//     <div className="mx-auto container flex flex-row-reverse text-right">
//       <div>
//         <div className="float:right"> <CartIcon /> </div>
//         <div>Количество товаров: {cart.length} </div>
//         <div>Сумма: {cart.reduce((sum, item) => sum+=item.price, 0)} руб. </div>              
//     </div>
//      {/* <Menu onItemBuy={(item) => addToCart(item)}></Menu> */}


  

//  </div>
// );
// };
// };
//   export default Corzina;
// console.log (Corzina)