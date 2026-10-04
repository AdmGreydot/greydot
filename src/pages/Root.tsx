import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root(){
    const { pathname } = useLocation();

    const isHomePage = pathname === "/";
    return (
        <>
            <Header isHomePage={isHomePage}/>
            <Outlet/>
            <Footer />
        </>
    );
}