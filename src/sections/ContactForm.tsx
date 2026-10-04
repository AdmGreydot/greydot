import Input from '../components/controls/Input';
import Textarea from '../components/controls/Textarea';
import classes from './ContactForm.module.css'
export default function ContactForm(){
    async function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const besked = formData.get("besked") as string;
        if(name.trim().length === 0 && email.trim().length === 0 && besked.trim().length === 0){
            return
        }
        const data = {
            name,
            virksomhed: formData.get("virksomhed") as string,
            email,
            phone: formData.get("phone") as string,
            besked,
        }
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                console.error('Failed to send email:', result.error);
                return;
            }
            
            console.log('Email sent:', result);


    

    
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.row}>
                <Input label="Navn" type="text" name="name" required/>
                <Input label="Virksomhed" type="text" name="virksomhed"/>
            </div>
            <div className={classes.row}>
                <Input label="E-mail" type="email" name="email" required/>
                <Input label="Telefon" type="tel" name="phone"/>
            </div>
            <Textarea label="Besked" name="besked" required/>
            <button type='submit' className={classes.button}> Send besked <span>→</span></button>
        </form>
    );
}