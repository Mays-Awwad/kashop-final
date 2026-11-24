import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import Register from './pages/register/Register';

import Login from './pages/login/Login';
import Home from './pages/home/Home';
/*import Categories from "./components/category/Categories";*/
import UserContextProvider from "./context/UserContext";
/*
import Products from "./components/product/Products";
import ProductDetails from './pages/product/ProductDetails';
*/
import ProtectedRouter from "./ProtectedRouter";
import ProfileLayout from "./pages/profile/ProfileLayout";
import ProfileInfo from './pages/profile/ProfileInfo';
import ProfileOrders from './pages/profile/ProfileOrders';
import AuthLayout from './layout/AuthLayout';

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
            path:'profile',
           element: <ProtectedRouter>
               <ProfileLayout />
           </ProtectedRouter>,
           children:[
            {
                index:true,
                element:<ProfileInfo />
            },
            {
                 path:'orders',
                 element:<ProfileOrders />
            }
           ]
        },
    ]
  },
  {
    element:<AuthLayout />,
    children:[
         {
            path:'login',
            element:<Login />
        },
         {
            path:'register',
           element:<Register />
        },
    ]
  }

]);

export default router;