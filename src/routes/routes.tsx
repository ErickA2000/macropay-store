import { Navigate } from "react-router-dom";
import Product from "../pages/Product";
import Products from "../pages/Products";


export const ROUTES = [
    {
        path: "/",
        element: <Products/>
    },
    {
        path: "/products/:id",
        element: <Product/>
    },
    {
        path: '/*',
        element: <Navigate to="/"/>
    }
]