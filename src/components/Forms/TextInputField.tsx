import React from 'react';
import { TextField } from '@mui/material';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { IResumeData } from '../types';

interface TextInputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  size?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  inputProps?: object;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ name, label, placeholder, size, onKeyPress, inputProps }) => {
  return (
    <div className="TextInputField">
      {onKeyPress !== undefined ? (
        <Field
          fullWidth
          as={TextField}
          label={label}
          name={name}
          placeholder={placeholder}
          size={size ? size : ''}
          margin={size === 'small' ? 'dense' : 'normal'}
          helperText={<ErrorMessage name={name} />}
          // value={dotPropsToBracketProps(name)}
          InputLabelProps={{ shrink: true }}
          onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => onKeyPress(e)}
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
