import classes from './Header.module.css';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import { PLATFORMS } from '../data/platforms';
type HeaderProps={
    isHomePage:boolean
};
export default function Header({isHomePage}:HeaderProps){
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    function toggleDropdown() {
        setIsOpenDropdown((prev) => !prev);
    }
    
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
                        <li className={`${classes["has-children"]} ${isOpenDropdown ? classes.opened : ''}`} onClick={toggleDropdown}>
                            <a href="#platforme"  onClick={handleClose}>Platforme</a>
                            <svg className={classes.chevron} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m6 9 6 6 6-6"/></svg>
                            <div className={classes.dropdown}>
                            <ul>
                                {PLATFORMS.map(platform=>
                                    <li key={platform.id}>
                                        <a href={platform.link}>{platform.name}</a>
                                    </li>
                                )}
                            </ul>
                            </div>
                        </li>
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