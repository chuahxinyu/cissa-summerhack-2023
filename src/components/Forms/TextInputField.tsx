import React from 'react';
import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

interface TextInputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  size?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ name, label, placeholder, size, onKeyPress }) => {
  return (
    <div className="TextInputField">
      {onKeyPress !== undefined ? (
        <TextField
          fullWidth
          label={label}
          name={name}
          placeholder={placeholder}
          size={size === 'small' ? size : 'medium'}
          margin={size === 'small' ? 'dense' : 'normal'}
          helperText={<ErrorMessage name={name} />}
          onKeyPress={(e) => onKeyPress(e)}
          InputLabelProps={{ shrink: true }}
        />
      ) : (
        <Field
          fullWidth
          as={TextField}
          label={label}
          name={name}
          placeholder={placeholder}
          size={size ? size : ''}
          margin={size === 'small' ? 'dense' : 'normal'}
          helperText={<ErrorMessage name={name} />}
          InputLabelProps={{ shrink: true }}
        />
      )}
    </div>
  );
};

export default TextInputField;
