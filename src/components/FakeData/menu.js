

const menu = [
    {
      id:1,
      title: "Суп Шулэн",
      sostav: ["Лапша", "мясо", "картошка"],
      priceCooking: 0,
      price: 200, // 'стоимость Шулэна 200 рублей' ,
      image: "/assets/shulen.jpg",
    },
    {
      id:2,
      title: "Буузы",
      sostav: ["Тесто", "фаршговяжий", "фаршсвиной", "лук"],
      priceCooking: 0,
      price: 250, //'стоимость бууз: 40 руб за 1 шт., 35 руб за 1 шт. замороженные',
      image: "https://voyagerestaurant.ru/wp-content/uploads/2020/07/hot_14.jpg",  
    },
    {
      id:3,
      title: "Цуйван",
      sostav: ["Лапша", "мясо", "перецболгарский", "лук"],
      priceCooking: 0,
      price: 150, //'стоимость Цуйвана 150 руб за 200 гр., стоимость Цуйвана 250 руб за 400 гр.',
      image: "https://voyagerestaurant.ru/wp-content/uploads/2020/07/udon-grudka.jpg",
    },
   {
    id:4,
    title:'Борщ',
    sostav: ['Капуста', 'мясокурицы', 'картошка'],
    priceCooking: 0,
    price:  120, //['120 руб за 200 гр.', '220 руб за 400 гр.'],    
    image: "https://voyagerestaurant.ru/wp-content/uploads/2020/07/soup_1.jpg",
  },
   { 
    id:5,
    title:'Вареники с картошкой',
    sostav: ['Тесто', 'картошка', 'лук'],
    priceCooking: 0,
    price: 100, //['100 руб за 120 гр.', '200 руб за 240 гр.'],   
    veganfood: true,
    image: "https://voyagerestaurant.ru/wp-content/uploads/2020/07/hot_3.jpg",
   },
   {
    id:6,
    title:'Морс из брусники',
    sostav: ['Брусника', 'морс', 'сахар'],
    priceCooking: 0,
    price: 100, //['100 руб за 120 гр.', '200 руб за 240 гр.'],   
    veganfood: true,
    image: "https://voyagerestaurant.ru/wp-content/uploads/2020/07/mors.jpg",
  },
];

export default menu;