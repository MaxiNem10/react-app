import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactsPage from "../pages/ContactsPage";
import AboutPage from "../pages/AboutPage";
import MenuItemPage from "../pages/MenuItemPage";
import MenuPage from "../pages/MenuPage";
import CartPage from "../pages/CartPage";
import CartProvider from "../components/CardProviders/CardProviders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/", element: <MenuPage /> },

      {
        path: "/catalog/:id",
        element: <MenuItemPage />,
      },

      {
        path: "/cart",
        element: 
            <CartPage />,
          
      },

      {
        path: "about",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <AboutPage />,
          },
          {
            path: "contacts",
            element: <ContactsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
