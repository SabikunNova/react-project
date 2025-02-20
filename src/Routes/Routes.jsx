import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Register/Login";
import SignUp from "../pages/Register/SignUp";
import Error from "../pages/Error/Error";
import FetchData from "../pages/Fetch/FetchData";
import FetchBooks from "../pages/FetchBooks/FetchBooks";
import SingleBooks from "../pages/FetchBooks/SingleBooks";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/fetch",
                element: <FetchData/>
            },
            {
                path: "/fetchBooks",
                element: <FetchBooks/>,
                loader: () => fetch('https://ipit-books-backend-project.onrender.com/allBooks'), 
                
            },
            {
                path: '/singleBooks/:_id',
                element: <SingleBooks/>,
                loader: async ({params}) => fetch(`https://ipit-books-backend-project.onrender.com/allBooks/${params._id}`),
            },
            {
                path: "*",
                element: <Error/>
            }
        ]
    }
])