import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField as MuiTextField, InputAdornment } from '@material-ui/core';

import Required from '../../icons/Required';

const TextField = ({ placeholder, onChange, error, id, type, onBlur }) => {
  const classes = useStyles();
  const hasError = !!error;
  return (
    <MuiTextField
      error={hasError}
      id={id}
      type={type}
      helperText={hasError ? error : ''}
      className={classes.textField}
      placeholder={placeholder}
      onBlur={onBlur}
      variant='outlined'
      color='primary'
      onChange={(event) => onChange(id, event)}
      InputLabelProps={{
        shrink: true,
      }}
      required
      InputProps={{
        endAdornment: (
          <InputAdornment position='start' className={classes.icon}>
            <Required />
          </InputAdornment>
        ),
      }}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: '16px 0',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px',
      color: 'white',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.7)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  icon: {
    '& .MuiSvgIcon-root': {
      width: '8px',
    },
  },
}));

export default TextField;
