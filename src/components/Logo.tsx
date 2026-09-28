import classes from './Logo.module.css'
import LogoImage from '../assets/logo.png'
export default function Logo(){
    return (
        <a href="/" className={classes.logo}>
            <img src={LogoImage} alt="GreyDot"/>
        </a>
    );
}