import classes from './Hero.module.css';
export default function Hero(){
    return (
        <section className={classes.hero}>
            <div className={`container ${classes.wrap}`}>
                <div className={classes.circle}>
                <div className={`${classes['side-text']} ${classes['side-text_left']}`}>
                    digitale løsninger til en stærkere hverdag
                </div>
                    <div className={classes.eyebrow}>
                        Vi forbinder
                    </div>
                    <h1>
                        Mennesker.<br/>
                        Muligheder.
                    </h1>
                    <a href="#om-os">
                        <svg width="25" height="39" viewBox="0 0 25 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 1.5V37.5M23.5 24.9L12.5 37.5L1.5 24.9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <div className={`${classes['side-text']} ${classes['side-text_right']}`}>
                        platforme mennesker samfund
                    </div>
                </div>
            </div>
        </section>
    );
}