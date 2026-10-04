import classes from './Header.module.css';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
type HeaderProps={
    isHomePage:boolean
};
export default function Header({isHomePage}:HeaderProps){
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 20);
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      function handleToggle(){
        setIsOpened(prev=>!prev);
      }
      function handleClose(){
        setIsOpened(false);
      }
    return(
        <header className={`${classes.header} ${isHomePage?classes.home:''} ${isScrolled?classes.scrolled:''}`}>
            <div className="container">
                <div className={classes.wrap}>
                    <Logo />
                    <Navigation className={`${isOpened?classes['is-open']:''}`}>
                        <li><a href="#om-os" onClick={handleClose}>Om os</a></li>
                        <li><a href="#platforme"  onClick={handleClose}>Platforme</a></li>
                        <li><a href="#historie" onClick={handleClose}>Historie</a></li>  
                    </Navigation>

                    <button className={`${classes.burger} ${isOpened?classes['is-open']:''}`} type="button" aria-label="Åbn menu" aria-expanded="false" aria-controls="main-menu" onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}