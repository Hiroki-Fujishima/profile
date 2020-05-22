import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
    <div className={css.font}>
    <h1>PROFILE</h1>
    
    
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       
        </Typography>
        <Typography variant="h5" component="h2">
          藤島 裕貴<br/>
          フジシマ ヒロキ
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <Typography variant="body2" component="p">
     
         <br/>出身地：北海道
         <br/>北海道室蘭清水丘高等学校卒業
         <br/>趣味: スノーボード スポーツ観戦
         <br/>好きな飲み物: ラフロイグ
         <br/><a href="mailto:ucuc.as@gmail.com">Mail</a>
          <br /><a href="https://github.com/Hiroki-Fujishima">GitHub</a>
         
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
