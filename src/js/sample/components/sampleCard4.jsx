
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import css from '../styles/sampleButton.module.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SampleCard3() {
  const classes = useStyles();

  return (
    <div className={css.font}>
    <h1>SKILL</h1>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
      
        </Typography>
        <Typography variant="h5" component="h2">
          Language
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
         
         <br/>Javascript
         <br/>Java
         <br/>PHP
          <br/>Swift
          <br/>HTML
          <br/>CSS
         
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  );
}

