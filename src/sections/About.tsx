import classes from './About.module.css';
export default function About(){
    return (
        <section id="om-os">
            <div className="container">
                <div className={classes.wrap}>
                    <div>
                        <div className="eyebrow">Om greydot</div>
                        <h2>Teknologi, der bringer mennesker tærrere sammen.</h2>
                    </div>
                    <div>
                        <p>Hos Greydot udvikler og driver vi digitale platforme, der skaber kontakt mellem mennesker – og mellem mennesker og samfundet. Vi tror på teknologi, der gør hverdagen enklere, mere tilgængelig og skaber nye muligheder for at hjælpe, handle og være i kontakt med hinanden.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}