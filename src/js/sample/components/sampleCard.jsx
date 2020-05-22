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

export default function SampleCard() {
  const classes = useStyles();

  return (
    <div className={css.front}>
       <div className={css.font}>
      <h1>I'M AN ENGINEER!</h1>
      </div>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Welcome to Hiroki's Portfolio!
        </Typography>
        <Typography variant="h5" component="h2">

         はじめまして
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <Typography variant="body2" component="p">
        藤島裕貴が作成したポーとフォリオサイトとなっています。<br/>
        このポートフォリオはReact-Reduxを使用して作成しています。<br/>
        React.jsだけでも良いのですが、
        Reduxの部品管理の学習するために作成してみました。<br/>
        Reduxを使用した電卓アプリもリンクがありますので、是非ご覧ください。<br/>
      
          <br />
        
        </Typography>
      </CardContent>
    
    </Card>
   
    </div>
  );
}
