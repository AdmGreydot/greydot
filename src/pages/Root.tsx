import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Root(){
    const { pathname } = useLocation();

    const isHomePage = pathname === "/";
    return (
        <>
            <ScrollToTop/>
            <Header isHomePage={isHomePage}/>
            <Outlet/>
            <Footer />
        </>
    );
}