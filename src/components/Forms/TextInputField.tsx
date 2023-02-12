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
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext<IResumeData>();
  let hasValue = false;
  const dotPropsToBracketProps = (name: string) => {
    const splitName = name.split('.');
    if (splitName.length === 0) {
      return '';
    }
    let res = values;
    for (const prop of splitName) {
      console.log({ prop: prop, res: res });
      res = (res as any)[prop];
    }

    if (res) hasValue = true;

    return res;
  };
  return (
    <div className="TextInputField">
      {onKeyPress !== undefined ? (
        // <TextField
        //   fullWidth
        //   label={label}
        //   name={name}
        //   placeholder={placeholder}
        //   size={size === 'small' ? size : 'medium'}
        //   margin={size === 'small' ? 'dense' : 'normal'}
        //   helperText={<ErrorMessage name={name} />}
        //   onKeyPress={(e) => onKeyPress(e)}
        //   value={dotPropsToBracketProps(name)}
        //   InputLabelProps={{ shrink: hasValue }}
        // />
        <Field
          fullWidth
          as={TextField}
          label={label}
          name={name}
          placeholder={placeholder}
          size={size ? size : ''}
          margin={size === 'small' ? 'dense' : 'normal'}
          helperText={<ErrorMessage name={name} />}
          value={dotPropsToBracketProps(name)}
          InputLabelProps={{ shrink: hasValue }}
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
          value={dotPropsToBracketProps(name)}
          InputLabelProps={{ shrink: hasValue }}
        />
      )}
    </div>
  );
};

export default TextInputField;
