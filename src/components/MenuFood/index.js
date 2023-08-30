// // import MenuCard from "../../components/MenuCard";
// import { useDispatch, useSelector } from "react-redux";
// import { loadMenu } from "../../store/slices/menuSlice";
// import { useEffect } from "react";
// import LoadingError from "../../components/LoadingError";
// import LoadingStart from "../../components/LoadingStart";
// import MenuFood from "../../components/MenuFood/MenuCard";



// const MenuPage = () => {
//   const menu = useSelector((state) => state.menu);
//   // const [category, setCategory] = useState()

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadMenu());
//   }, []);

//   return (
//     <>
//       {loadMenu === "fulfilled" && (
//         <div className={"grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}>
//           {menu.items.map((item) => (
//             <MenuFood item={item} />
//           ))}
//         </div>
//       )}

//       {loadMenu === "pending" && (
//         <LoadingStart message="Loading in progress" />
//       )}

//       {loadMenu === "rejected" && (
//         <LoadingError message="Error loading data" />
//       )}
//     </>
//   );
// };

// export default MenuPage;