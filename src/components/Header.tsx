import classes from './Header.module.css';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
export default function Header(){
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <header className={`${classes.header} ${isScrolled?classes.scrolled:''}`}>
            <div className="container">
                <div className={classes.wrap}>
                    <Logo />
                    <Navigation/>
                </div>
            </div>
        </header>
    );
}