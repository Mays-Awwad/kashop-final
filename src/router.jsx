import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Register from './pages/register/Register';
import Cart from './pages/cart/Cart';
import Products from './pages/products/Products';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Categories from "./components/category/Categories";
import UserContextProvider from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
        {
              index:true,
              element:<Home />
        },

        {
            path:'login',
            element:<Login />
        },

        {
           path:'products',
           element:<Products />
        },
        {
            path:'register',
           element:<Register />
        },

        {
            path:'cart',
           element:<UserContextProvider>
                <Cart />
           </UserContextProvider>
        },
        {
            path:'categories',
           element:<Categories />
        }
    ]
  },

]);

export default router;