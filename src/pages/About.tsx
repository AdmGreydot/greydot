import PlatformTree from "../components/PlatformTree";
import SEO from "../components/SEO";
import CTA from "../sections/CTA";
import Team from "../sections/Team";
import Values from "../sections/Values";

export default function About(){
    return (
        <>
        <SEO
            title="Om Os"
            description="Vi er et lille, dedikeret team med forskellige kompetencer og en fælles nysgerrighed."
        />
        <PlatformTree/>
        <Team/>
        <Values/>
        <CTA link="/karriere" linkTitle="Send os en ansøgning">
            <div className="eyebrow">
                Bliv en del af Greydot
            </div>
            <h2>Har du lyst til at arbejde sammen med os?</h2>
            <p>Vi er altid åbne for at møde mennesker med nye idéer og kompetencer. Har du lyst til at blive en del af Greydot, vil vi meget gerne høre fra dig.</p>
        </CTA>
        </>
    );
}