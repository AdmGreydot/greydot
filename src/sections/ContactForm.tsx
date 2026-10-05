import { useState } from 'react';
import Input from '../components/controls/Input';
import Textarea from '../components/controls/Textarea';
import classes from './ContactForm.module.css'

export default function ContactForm(){
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);
    async function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const besked = formData.get("besked") as string;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errorsArr:string[]=[];
        setIsSuccess(false);
        setErrors([]);
        if(name.trim().length === 0 ){
            errorsArr.push('Navn er påkrævet');
        }
        if(email.trim().length === 0 ){
            errorsArr.push('Email er påkrævet');
        }
        else if (!emailRegex.test(email)) {
            errorsArr.push('Indtast en gyldig e-mailadresse');
        }
        if(besked.trim().length === 0){
            errorsArr.push('Besked er påkrævet');
        }
        if(errorsArr.length>0){
            setErrors(errorsArr);
            return;
        }
        setIsLoading(true);
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
                setErrors(['Der opstod en fejl. Prøv venligst igen, eller kontakt os direkte på email.']);
                console.error('Failed to send email:', result.error);
                return;
            }
        
            setIsSuccess(true);

        } catch (error) {
            setErrors(['Der opstod en fejl. Prøv venligst igen, eller kontakt os direkte på email.']);
            console.error('Failed to send email:', error);
        } finally{
            setIsLoading(false);
        }
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            {errors.length > 0 && (
                <div className={classes.errors}>
                    {errors.map((error) => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            )}
            {isSuccess && (
                <div className={classes.success}>
                    <p>Tak for din besked. Vi vender tilbage til dig hurtigst muligt.</p>
                </div>
            )}
            <div className={classes.row}>
                <Input label="Navn" type="text" name="name" required/>
                <Input label="Virksomhed" type="text" name="virksomhed"/>
            </div>
            <div className={classes.row}>
                <Input label="E-mail" type="email" name="email" required/>
                <Input label="Telefon" type="tel" name="phone"/>
            </div>
            <Textarea label="Besked" name="besked" required/>
            <button type='submit' className={classes.button} disabled={isLoading}> Send besked <span>→</span></button>
        </form>
    );
}