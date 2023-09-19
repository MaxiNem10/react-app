import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addToCart } from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const sostav = (
    <div className="text-xs "> {item.attributes.sostav.join(", ")} </div>
  );
  return (
    <div class={"rounded overflow-hidden shadow-lg textf-center " + style.card}>
      <img
        src={
          "http://localhost:1337" +
          item?.attributes?.image?.data?.attributes?.formats?.small?.url
        }
      />
      <div>
        <Link to={`/catalog/${item.id}`}>
          <div className={"text-1,8xl font-bold " + style.name}>
            {item?.attributes?.Food}
          </div>
          </Link>
        <div className={"py-2 " + style.name}>{sostav}</div>
        <div>{item?.attributes?.price} "руб"</div>
        <button
          onClick={() => dispatch(addToCart(item))}
          class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Купить
        </button>
      </div>
    </div>
  );
};
export default MenuCard;
