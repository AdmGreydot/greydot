import About from "../sections/About";
import Concept from "../sections/Concept";
import Hero from "../sections/Hero";
import History from "../sections/History";
import Platforms from "../sections/Platforms";

export default function Main(){
    return (
        <>
            <Hero/>
            <About/>
            <Platforms/>
            <Concept />
            <History />
        </>
    );
}