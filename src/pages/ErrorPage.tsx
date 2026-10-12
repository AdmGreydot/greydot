import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage(){
    return (
        <>
            <Header/>
            <section className={classes.section}>
                <div className="container">
                    <div className="eyebrow">FEJL 404</div>
                    <h2>Ups! Denne side findes ikke.</h2>
                    <p>Siden, du leder efter, findes ikke eller er blevet flyttet.</p>
                    <Link to='/' className="btn">Tilbage til forsiden <span>→</span></Link>
                </div>
            </section>
            <Footer />
        </>
    );
}