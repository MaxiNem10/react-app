import style from "./Card.module.css";

const MenuCard = ({ item, onClickBuy = () => {}  }) => {
  const sostav = <div className="text-xs "> {item.sostav.join(", ")} </div>;
  return (
    <div class={"rounded overflow-hidden shadow-lg textf-center " + style.card}>
      <img src={item.image} />
      <div>
        <div className={"text-1,8xl font-bold " + style.name}>
          {" "}
          {item.title}
        </div>
        <div className={"py-2 " + style.name}>{sostav}</div>
        <button
          onClick = {() => onClickBuy(item)}
          class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Купить
        </button>
      </div>
    </div>
  );
};
export default MenuCard;
