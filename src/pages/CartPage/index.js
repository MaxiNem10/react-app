const CartPage = ({ cart, sum }) => {
  return (
  <>
      <ul>
      {cart.map((item) => (
        <li>
          {item.food?.attributes?.name} X {item.food?.attributes?.price} руб X ("") 
          {item.qty} шт
        </li>
      ))}
    </ul>
    <strong> Итого {sum} </strong>
  </>
  );
};

export default CartPage;