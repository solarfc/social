import React from "react";
import "./form-controls.css";

const FormControl = ({children, meta}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`form-group ${hasError ? 'error' : 'null'}`}>
            {children}
            <span>{meta.error}</span>
        </div>
    )
}

const Textarea = ({input, placeholder, ...props}) => {

    return (
        <FormControl {...props}>
            <textarea name="" id="" cols="30" rows="10" placeholder={placeholder} {...input}/>
        </FormControl>
    )
};

const Input = ({input, placeholder, ...props}) => {

    return (
        <FormControl {...props}>
            <input type={props.type} placeholder={placeholder} {...input}/>
        </FormControl>
    )
};


export {Textarea, Input};