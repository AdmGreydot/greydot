import classes from './CTA.module.css'
import background from '../assets/history.png'
import { Link } from 'react-router-dom';
type CTAProps={
    children:React.ReactNode,
    link:string,
    linkTitle:string
}
export default function CTA({children, link, linkTitle}:CTAProps){
    return (
        <section className={classes.section}>
            <div className="container">
                <div className={classes.content}>
                    {children}
                    <Link to={link} className="btn">{linkTitle} <span>→</span></Link>
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