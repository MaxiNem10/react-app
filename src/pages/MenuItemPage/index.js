import { useParams } from "react-router-dom"
import menu from "../../components/FakeData/menu";



const MenuItemPage = () => {
  const { id } = useParams();
  let menuItem = menu.find((item) => item.id == id);
  console.log(id);
  return (
    <>
    {/* <h1>Страница товара</h1> */}
      <h1>{menuItem.name}</h1>
      <img src={menuItem.image}></img>
      <p>{menuItem.sostav.join(", ")}</p>
    </>
  );
};

export default MenuItemPage;