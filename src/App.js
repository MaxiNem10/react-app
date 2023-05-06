import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuFood';



function App() {
  let food1 = {
    title:'Суп Шулэн',
    sostav: ['Лапша', 'мясо', 'картошка'],
    priceCooking: 0,
    price: 200, // 'стоимость Шулэна 200 рублей' ,
  };
let food2 = {
    title:'Буузы',
    sostav: ['Тесто', 'фаршговяжий', 'фаршсвиной', 'лук'],
    priceCooking: 0,
    price: 250, //'стоимость бууз: 40 руб за 1 шт., 35 руб за 1 шт. замороженные',      
  };
let food3 = {  
    title:'Цуйван',
    sostav: ['Лапша', 'мясо', 'перецболгарский', 'лук'],
    priceCooking: 0,
    price: 150, //'стоимость Цуйвана 150 руб за 200 гр., стоимость Цуйвана 250 руб за 400 гр.',    
  };
//   let food4 = { 
//     title:'Морс',
//     sostav: ['Вода', 'ягода',],
//     priceCooking: 0,
//     price: 50, //'50 руб за 200 гр.',    
//   };

//   let food5 = {
//     title:'Борщ',
//     sostav: ['Капуста', 'мясокурицы', 'картошка'],
//     priceCooking: 0,
//     price:  120, //['120 руб за 200 гр.', '220 руб за 400 гр.'],    
//   };
//   let food6 = { 
//     title:'вареники с картошкой',
//     sostav: ['Тесто', 'картошка', 'лук'],
//     priceCooking: 0,
//     price: 100, //['100 руб за 120 гр.', '200 руб за 240 гр.'],   
//     veganfood: true
//   };
//   let food7 = {      
//     title:'Пюре с котлетой',
//     sostav: ['картошка', 'фаршговяжий', 'подлив', 'лук'],
//     priceCooking: 0,
//     price: 130, //['130 руб за 200 гр.', '260 руб за 400 гр.'],    
//   };
//   let food8 = {
//     title:'Чай',
//     sostav: ['Вода', 'пакетикчая'],
//     priceCooking: 0,
//     price: 50, //'50 руб за 200 гр.',    
//   };
//   let food9 = {
//     title:'Морс',
//     sostav: ['Вода', 'ягода'],
//     priceCooking: 0,
//     price: 50, //'50 руб за 200 гр.',
//     veganfood: true    
//   };
  
//   let food10 = {  
//     title:'Морс',
//     sostav: ['Вода', 'ягода'],
//     priceCooking: 0,
//     price: 50, // '50 руб за 200 гр.',
//     veganfood: true    
//   };

    
const MenuFood = [
 food1,  food2, food3, 
 ] ;

  
  return (
    <div className="App">
      <header className="App-header">
      {MenuFood.map ((item) => (
      <Menu MenuFood={item.title} sostav={item.sostav}  price={item.price} />))}
         <img src={logo} className="App-logo" alt="logo" />
        
        <p>        
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
