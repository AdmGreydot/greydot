import classes from './Footer.module.css'
import Logo from './Logo';
import Navigation from './Navigation';

export default function Footer(){
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.wrap}>
                    <div className={classes.logo}>
                        <Logo />
                        <p>Digitale løsninger<br/>
                        For en mere forbundet hverdag</p>
                    </div>
                    <Navigation />
                </div>
                <div className={classes.copyright}>
                    <p>@ 2026 Greydot. Alle rettigheder forbeholdes</p>
                </div>
            </div>
        </footer>
    );
}