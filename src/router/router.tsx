import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Main from "../pages/Main";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Career from "../pages/Career";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement: <ErrorPage/>,
        children:[
            {index:true, element:<Main/>},
            {path:'kontakt-os', element:<Contact/>},
            {path:'om-os', element:<About/>},
            {path:'karriere', element:<Career/>}
        ]
    }
]);