import classes from './History.module.css'
import background from '../assets/history.png'
export default function History(){
    return (
        <section className={classes.section} id="historie">
            <div className="container">
                <div className={classes.content}>
                    <div className="eyebrow">
                        Siden 2012
                    </div>
                    <h2>Skabt med en enkel idé.</h2>
                    <p>Greydot blev grundlagt af Roland Thorsen i 2012. Siden da har virksomheden udviklet sig til et team, der arbejder med at skabe digitale løsninger med fokus på mennesker, relationer og medmenneskelighed.</p>
                    <p>Vi tror på teknologi, der kan gøre hverdagen enklere og skabe nye muligheder for mennesker. Bag Greydot står et team med forskellige kompetencer, men med et fælles ønske om at skabe løsninger, der gør en forskel.</p>
                </div>
            </div>
            <div className={`${classes.circle} ${classes['image-circle']}`}>
                <img src={background} alt="Skabt med en enkel idé." />
            </div>
            <div className={`${classes.circle} ${classes['simple-circle']}`}>
                <p>mennesker driver fremgang</p>
            </div>
        </section>
    );
}