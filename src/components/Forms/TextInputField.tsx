import React from 'react';
import { TextField } from '@material-ui/core/';
import { ErrorMessage, Field } from 'formik';

interface TextInputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  size?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ name, label, placeholder, size }) => {
  return (
    <div className="TextInputField">
      <Field
        fullWidth
        as={TextField}
        label={label}
        name={name}
        placeholder={placeholder}
        size={size ? size : ''}
        margin={size === 'small' ? 'dense' : ''}
        helperText={<ErrorMessage name={name} />}
      />
    </div>
  );
};

export default TextInputField;
