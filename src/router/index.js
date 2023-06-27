import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Menu from "../components/MenuFood";
import ContactsPage from "../pages/ContactsPage";
import AboutPage from "../pages/AboutPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    //   {
    //     path: "about",
    //     element: <Outlet/>,

//           {
//             path: "contacts",
//             element:(
//                 <div>
//                     <a href="+79516206273">89516206273</a>
//                 </div>
//     ]
  // },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "contacts",
            element: <ContactsPage />,
          },
        ],
      // },
    // ],
  },
])

export default router;
