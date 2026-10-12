import Member from '../components/Member';
import { PEOPLE } from '../data/people';
import classes from './Team.module.css';

export default function Team(){
    return (
        <section>
            <div className="container">
                <div className={classes.wrap}>
                    <div>
                        <div className="eyebrow">Vores Team</div>
                        <h2>Mennesker bag Greydot</h2>
                    </div>
                    <div>
                        <p>Vi er et lille, dedikeret team med forskellige kompetencer og en fælles nysgerrighed. Vi tror på, at digitale løsninger kan skabe nye muligheder og gøre en forskel i hverdagen.</p>
                    </div>
                </div>
                <div className={classes.team}>
                    {PEOPLE.map(person=>(
                        <Member key={person.id} {...person}/>
                    ))}
                </div>
            </div>
        </section>
    );
}