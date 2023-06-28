import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../components/MenuFood";
import ContactsPage from "../pages/ContactsPage";
import AboutPage from "../pages/AboutPage";
import { Children } from "react";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
  children: [
        {
        path: "",
        element: <Outlet />,
      },  
        

          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "contacts",
            element: <ContactsPage />,
          },
       
        ]    
        },
    

]);

export default router;
