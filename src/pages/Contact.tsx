import classes from './Contact.module.css'
import background from '../assets/history.png'
import ContactForm from '../sections/ContactForm'
export default function Contact(){
    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.wrap}>
                    <div className={classes.main}>
                        <div className="eyebrow">Kontakt os</div>
                        <h2>Send os en besked.</h2>
                        <p>Udfyld formularen, så vender vi tilbage hurtigst muligt.</p>
                        <p>Vi ser frem til at høre fra dig.</p>
                        <ContactForm/>
                    </div>
                    <div className={classes.side}>
                        <img src={background} alt="" />
                        <div className="eyebrow">
                            Andre måder
                        </div>
                        <h3>
                            Andre måder at nå os på
                        </h3>
                        <div className={classes.contacts}>   
                            <div className={classes.contact}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                                <p><a href="mailto:kontakt@greydot.dk">kontakt@greydot.dk</a></p>
                            </div> 
                            <div className={classes.contact}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                                <p><a href="tel:+45 22 58 41 42">+45 22 58 41 42</a></p>
                            </div>
                            <div className={classes.contact}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                <p>J.Skjoldborgs Vej 57 8230 Åbyhøj</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}