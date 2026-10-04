import { useId, useRef, useState } from 'react';
import type { InputHTMLAttributes } from 'react';

import classes from './Control.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export default function Input({ label, required, ...props }: InputProps) {
    const [inFocus, setInFocus] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const generatedId = useId();
    const id = props.id ?? generatedId;

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
            <label htmlFor={id}>
                <span className={inFocus ? classes.label : ''}>
                    {label}
                    {required && <span> *</span>}
                </span>

                <input
                    {...props}
                    id={id}
                    required={required}
                    ref={ref}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </label>
        </div>
    );
}