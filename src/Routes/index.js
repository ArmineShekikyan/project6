import React from 'react';
import Home from "../components"
import Cart from '../Cart'
import Favourites from '../Favourites'
 const routes = [ 
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Cart",
      element: <Cart />,
    },
    {
      path: "/Favourites",
      element: <Favourites />,
    },
    {
      path: "*",
      element: <>Not found</>,
    }
  ]
  export default routes;