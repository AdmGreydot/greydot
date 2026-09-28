import classes from './Platforms.module.css';
import {PLATFORMS} from '../data/platforms';
import Platform from '../components/Platform';
export default function Platforms(){
    return(
        <section className={classes.section} id="platforme">
            <div className="container">
                <div className={classes.head}>
                    <div className="eyebrow">Vores platforme</div>
                    <h2>Digitale løsninger <br/>med mennesker i fokus</h2>
                </div>
                <div className={classes.platforms}>
                    {PLATFORMS.map(platform=>
                        <Platform key={platform.id} {...platform}/>
                    )}
                </div>
            </div>
        </section>
    );
}