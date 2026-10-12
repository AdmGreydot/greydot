import { useState } from 'react';
import Input from '../controls/Input';
import Textarea from '../controls/Textarea';
import classes from './JobForm.module.css';
import FileUpload from '../controls/FileUpload';

export default function JobForm(){
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [fileResetKey, setFileResetKey] = useState(0);
    async function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const interesser = formData.get("interesser") as string;
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
        if(phone.trim().length === 0 ){
            errorsArr.push('Telefon er påkrævet');
        }
        if(interesser.trim().length === 0 ){
            errorsArr.push('Hvad interesserer dig?');
        }
        if(besked.trim().length === 0){
            errorsArr.push('Fortæl lidt om dig selv');
        }
        if(errorsArr.length>0){
            setErrors(errorsArr);
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch('/api/send-application', {
                method: 'POST',
                body: formData,
            });
            
            const result = await response.json();
            if (!response.ok) {
                setErrors(['Der opstod en fejl. Prøv venligst igen, eller kontakt os direkte på email.']);
                console.error('Failed to send email:', result.error);
                return;
            }
        
            setIsSuccess(true);
            e.currentTarget.reset();
            setFileResetKey((key) => key + 1);

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
                    <p>Tak for din ansøgning. Vi vender tilbage til dig hurtigst muligt.</p>
                </div>
            )}
            <Input label="Fulde navn" type="text" name="name" required/>
            <div className={classes.row}>
                <Input label="E-mail" type="email" name="email" required/>
                <Input label="Telefon" type="tel" name="phone" required/>
            </div>
            <Input label="Hvad interesserer dig?" type="text" name="interesser" required/>
            <Textarea label="Fortæl lidt om dig selv" name="besked" required/>
            <Input label="Linkedin eller portfolio" type="text" name="link"/>
            <FileUpload  key={fileResetKey}/>
            <button type='submit' className={`btn ${classes.button}`} disabled={isLoading}> Send ansøgning <span>→</span></button>
        </form>
    );
}