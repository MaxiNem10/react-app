
import menu from "../FakeData/menu";
import MenuCard from "./MenuCard";


const Menu = ({onItemBuy}) => {

  return (
    <div className="mx-auto grid grid-cols-2 gap-2 container md:grid-cols-3 xl:grid-cols-4">
      {menu.map((item) => (
        <MenuCard item={item} onClickBuy={onItemBuy} />
      ))}
      
    </div>
  );
};

export default Menu;
