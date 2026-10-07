import SEO from "../components/Seo";
import About from "../sections/About";
import Concept from "../sections/Concept";
import Hero from "../sections/Hero";
import History from "../sections/History";
import Platforms from "../sections/Platforms";

export default function Main(){
    return (
        <>
            <SEO
                title="Digitale platforme, der forbinder mennesker"
                description="Greydot udvikler digitale platforme, der gør det lettere at finde, registrere, handle og skabe kontakt."
            />
            <Hero/>
            <About/>
            <Platforms/>
            <Concept />
            <History />
        </>
    );
}