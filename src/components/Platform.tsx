import classes from './Platform.module.css'

type PlatformProps = {
    image:string,
    name:string,
    description:string,
    link:string
};
export default function Platform({image, name, description, link}:PlatformProps){
    return (
        <div className={classes.platform}>
            <img src={image} alt={name} />
            <div className={classes.content}>
                <h4>{name}</h4>
                <p>{description}</p>
                <a href={link} className={classes.link}>SE PLATFORMEN <span className={classes.arrow}>→</span></a>
            </div>
        </div>
    );
}