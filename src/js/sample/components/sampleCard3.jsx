import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
   <h1>PRODUCTS</h1>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        電卓アプリ
        </Typography>
        <Typography variant="body2" component="p">
         <br/>フレームワーク: React-Redux
         <br/>バージョン: ver7.1.0
         <br/><a href="https://sample-calc-app.web.app">作品はこちら</a> 
        </Typography>
      </CardContent>
    </Card>
    </div>
    
  );
}
