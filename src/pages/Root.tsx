import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Root(){
    const { pathname } = useLocation();
    let haveBg = false;

    switch(pathname){
        case '/':
            haveBg=true;
            break;
        case '/om-os':
            haveBg=true;
            break;
        default:
            haveBg=false;
            break;
    }
    return (
        <>
            <ScrollToTop/>
            <Header haveBg={haveBg}/>
            <Outlet/>
            <Footer />
        </>
    );
}