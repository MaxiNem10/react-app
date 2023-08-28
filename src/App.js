import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/MenuFood";
import Image from "./components/Image";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import menu from "./components/FakeData/menu";
import CartIcon from "./components/svg/CartIcon";
// import CartProvider from "./components/CardProviders/CardProviders";
// import CartWidget from "./components/Corzina";
import Corzina from "./components/Corzina";


function App() {

  
  //  const [cart, setCart] = useState([]);

  //  const addToCart = (item) => {
    // setCart([...cart, item]);
  //  };
    
  return (
    
    <div className="App p-2">
     
        <MainMenu />
        <Corzina /> 
        <Menu />
        <Outlet /> 
        
        {/* {/* <CartProvider> */}
          {/* <CartWidget /> */}
        {/* </CartProvider>        */} */}
        {/* <ContactsPage /> */}
        
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
