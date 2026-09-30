import classes from './Navigation.module.css'
type NavigationProps = {
    className?:string,
    children:React.ReactNode
};
export default function Navigation({className, children}:NavigationProps){
    return (
        <nav>
            <ul className={`${classes.menu} ${className ?? ''}`}>
                {children}
            </ul>
        </nav>
    );
}