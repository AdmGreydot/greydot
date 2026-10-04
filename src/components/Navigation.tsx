import classes from './Navigation.module.css'
type NavigationProps = {
    className?:string,
    children:React.ReactNode,
    isHeader?:boolean
};
export default function Navigation({className, children, isHeader}:NavigationProps){
    return (
        <nav>
            <ul className={`${classes.menu} ${isHeader ?? classes.header} ${className ?? className}`}>
                {children}
            </ul>
        </nav>
    );
}