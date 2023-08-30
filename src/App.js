import "./App.css";
import { Link, Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import CartProvider from "./components/CardProviders/CardProviders";
import CartWidget from "./components/CartWidget";
// import Corzina from "./components/Corzina";


function App() {

  
  //  const [cart, setCart] = useState([]);

  //  const addToCart = (item) => {
    // setCart([...cart, item]);
  //  };
    
  return (
    
    <div className="App p-2">
     
        <MainMenu />
        {/* <Corzina />  */}
        
         
        <CartProvider>
        <CartWidget/>  
        </CartProvider>        
        <Outlet></Outlet>
                
       {/* <div className="mx-auto container flex flex-row-reverse text-right">
        <div>
          <div className="p-2"><CartIcon /> </div>
          <div>  Количество: {cart.length} </div>
          <div>Сумма: {cart.reduce((sum, item) => sum+=item.price, 0)} руб. </div>              
        </div>
      </div>  */}
      {/* <Menu onItemBuy={(item) => addToCart(item)}></Menu> */}

         
      {/*<Corzina></Corzina>*/}
      
      {/* <Image imgSrc= "https://voyagerestaurant.ru/wp-content/uploads/2020/07/shulen.jpg" /> */}
      {/* <Image imgSrc= "https://orda03.ru/wp-content/uploads/2021/02/TDN_0688.jpg" />  */}
    </div>

  );
}

export default App;
