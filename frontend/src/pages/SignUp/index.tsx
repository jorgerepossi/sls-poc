import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Checkbox,
  Typography,
  IconButton,
  Link,
} from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import Title from '../../components/Title';
import TextField from '../../components/TextField';
import { CREATE_USER } from '../../resolvers/mutation';
import Logo from '../../assets/images/logo.svg';
import { changeValue, validateField } from './SignUpSlice';

const SignUp = () => {
  const [error, setError] = useState('')
  const [requestId, setRequestId] = useState('')
  const [createUser] = useMutation(CREATE_USER);
  const dispatch = useDispatch();
  const classes = useStyles();

  const state = useSelector((state) => state.signUp);

  const handleSubmit = async (event) => {
    event?.preventDefault();
    setError('');

    const { value } = state;
    try {
      const {data}: any = await createUser({
        variables: {
          input: {
            username: value.username,
            birthDate: value.dob,
            email: value.email,
            password: value.password,
          }
        },
      });
      setRequestId(data.createUser.id)
    } catch (error) {
      setError(error)
    }
  };

  const handleChange = (name, event) => {
    const value = event.target.value;
    dispatch(changeValue({ name, value }));
    if (!!state.valid[name]) {
      dispatch(validateField({ name }));
    }
  };

  const handleValidate = (event) => {
    const name = event.target.id;
    dispatch(validateField({ name }));
  };

  const toggleTerms = () => {
    const value = !state.value.terms;
    dispatch(changeValue({ name: 'terms', value }));
  };

  const { valid } = state;

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <IconButton aria-label='delete' className={classes.icon}>
        <img src={Logo} />
      </IconButton>
      <Box className={classes.box}>
        <Title />
        {error && <Typography className={classes.error}>Error: {error}</Typography>}
        {requestId && <Typography className={classes.request}>Your request Id is: {requestId}</Typography>}
        {!requestId && <><TextField
          placeholder='Username'
          id='username'
          type='text'
          onChange={handleChange}
          onBlur={handleValidate}
          error={valid.username}
        />
        <TextField
          placeholder='Date of Birth'
          id='dob'
          type='date'
          onChange={handleChange}
          onBlur={handleValidate}
          error={valid.dob}
        />
        <TextField
          placeholder='Email address'
          id='email'
          type='email'
          onChange={handleChange}
          onBlur={handleValidate}
          error={valid.email}
        />
        <TextField
          placeholder='Password'
          type='password'
          id='password'
          onChange={handleChange}
          onBlur={handleValidate}
          error={valid.password}
        />
        <div className={classes.terms}>
          <Checkbox
            color='primary'
            className={classes.checkbox}
            checked={state.value.terms}
            onClick={toggleTerms}
          />
          <Typography className={classes.text}>
            By singing up you agree to our{' '}
            <Link href='#' underline='always'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href='#' underline='always'>
              Privacy Policy
            </Link>
          </Typography>
        </div>
        <Button
          variant='contained'
          className={classes.button}
          size='large'
          color='primary'
          onClick={handleSubmit}
          type='submit'
        >
          sign Up
        </Button></>}
      </Box>
    </form>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0 0 0',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: '350px',
    width: '100%',
    backgroundColor: '#272727',
    borderRadius: '30px',
    padding: '32px',
    boxShadow: '3px -10px 26px 21px rgba(0,0,0,0.35);',
  },
  terms: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '16px 8px',
    padding: '0 32px',
  },
  button: {
    margin: '8px 0 16px 0',
    borderRadius: '30px',
  },
  icon: {
    pointerEvents: 'none',
    padding: 0,
    top: '45px',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  checkbox: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  error: {
    color: 'red',
  },
  request: {
    color: 'green'
  }
}));

export default SignUp;
