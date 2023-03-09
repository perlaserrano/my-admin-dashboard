
import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    borderRadius: theme.spacing(1),
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  stat: {
    color: '#536dfe',
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: '3rem',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export default  function Statistics() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Total de usuarios registrados
        </Typography>
        <Typography variant="h3" className={classes.stat}>
          100
        </Typography>
        <Typography variant="subtitle1">
          Desde la última semana
        </Typography>
      </CardContent>
    </Card>
  );
}


