import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/About";
import MainMenu from "../components/MainMenu";
import Menu from "../components/MenuFood";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    children: [
    {path:"/", element:<Menu/>},
        {
        path: "about",
        element: <AboutPage />,
       children: [
          {
            path: "contacts",
            element:(
                <div>
                    <a href="+79516206273">89516206273</a>
                </div>
            ) 
          } 
        ]
      },
    ]
 },
]);


export default router;
