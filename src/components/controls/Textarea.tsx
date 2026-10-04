import { useRef, useState } from "react";
import classes from "./Control.module.css";
type TextareaProps = {
    label:string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>  & React.RefAttributes<HTMLTextAreaElement>;
export default function Textarea({label, required, ...props}:TextareaProps){
    const [inFocus, setInFocus] = useState(false);
    const ref = useRef<HTMLTextAreaElement>(null);

    function handleFocus() {
        setInFocus(true);
    }

    function handleBlur() {
        if (!ref.current?.value) {
            setInFocus(false);
        }
    }
    return (
        <div className={classes.control}>
          <label>
            <span className={inFocus ? classes.label : ''}>
              {label}
              {required && <span>*</span>}
            </span>
            <textarea required={required} rows={5} {...props}
                ref={ref}
                onFocus={handleFocus}
                onBlur={handleBlur}
            ></textarea>
          </label>
        </div>
    );
}