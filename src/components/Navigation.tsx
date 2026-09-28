import classes from './Navigation.module.css'
export default function Navigation(){
    return (
        <nav>
            <ul className={classes.menu}>
                <li><a href="#om-os">Om os</a></li>
                <li><a href="#platforme">Platforme</a></li>
                <li><a href="#historie">Historie</a></li>  
            </ul>
        </nav>
    );
}