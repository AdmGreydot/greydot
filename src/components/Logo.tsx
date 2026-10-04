import classes from './Logo.module.css'
import LogoImage from '../assets/logo.png'
import { Link } from 'react-router-dom';
export default function Logo(){
    return (
        <Link to="/" className={classes.logo}>
            <img src={LogoImage} alt="GreyDot"/>
        </Link>
    );
}