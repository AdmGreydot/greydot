import SEO from "../components/SEO";
import classes from "./Career.module.css";
import background from '../assets/history.png';
import JobForm from "../components/forms/JobForm";
export default function Career(){
    return (
        <>
            <SEO
            title="Bliv en del af os"
            description="
            Har du en interesse en interesse for virksomheden og brænder inde med nogle kompetencer du gerne vil bruge til noget godt! Så send endelig en uopfordret ansøgning!"
            />
                <section className={classes.section}>
                    <div className="container">
                        <div className={classes.wrap}>
                            <div className={classes.main}>
                                <div className="eyebrow">Bliv en del af os</div>
                                <h2>Lad os lære hinanden at kende.</h2>
                                <p>Har du lyst til at skabe noget sammen med os? Vi er altid åbne for nye perspektiver, idéer og kompetencer. </p>
                                <p>Fortæl os lidt om dig selv, og lad os tage en snak.</p>
                                <JobForm/>
                            </div>
                            <div className={classes.side}>
                                <img src={background} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}