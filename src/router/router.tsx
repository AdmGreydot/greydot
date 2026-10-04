import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Main from "../pages/Main";
import Contact from "../pages/Contact";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {index:true, element:<Main/>},
            {path:'/kontakt-os', element:<Contact/>}
        ]
    }
]);