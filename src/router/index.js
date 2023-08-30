import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../components/MenuFood";
import ContactsPage from "../pages/ContactsPage";

import MainMenu from "../components/MainMenu";
import AboutPage from "../pages/AboutPage";
import MenuItemPage from "../pages/MenuItemPage";
import Corzina from "../components/CartWidget";
import MenuPage from "../pages/MenuPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
    
  children:[
      
  {path: "/",
    element: <MenuPage />,
  },
    

    {
      path: "/catalog/:id",
      element: <MenuItemPage />,
    },
    {

      path: "about",
      element: <Outlet />,
      children:[
        {
          path: "",
          element: <AboutPage/>,
        },
    {
          path: "contacts",
          element: <ContactsPage />,
    },
   ]
  },
]
  }, 
])
 
 
export default router;
