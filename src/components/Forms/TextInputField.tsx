import React from "react";
import { TextField }from '@material-ui/core/';
import { ErrorMessage, Field } from 'formik';

interface TextInputFieldProps {
    name: string;
    label: string;
    placeholder: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({name, label, placeholder}) => {
    return <div className="TextInputField">
        <Field 
        as={TextField} 
        label={label}
        name={name}
        placeholder={placeholder}
        helperText={<ErrorMessage name={name} />}/>
    </div>
};

export default TextInputField;