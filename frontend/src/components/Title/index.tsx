import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: '28px',
    margin: '27px',
    top: '-50px',
  },
}));

const Tilte = () => {
  const classes = useStyles();
  return <Typography className={classes.title}>sign up</Typography>;
};

export default Tilte;
