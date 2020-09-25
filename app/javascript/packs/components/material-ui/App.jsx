import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Share from './Share';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.status.danger
  },
  msg: {
    color: 'blue',
    '& span': {
      color: 'red',
      '&:hover': {
        color: 'black'
      }
    }
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary">primary</Button>
      <Button variant="contained" className={classes.button}>
        danger
      </Button>
      <Typography className={classes.msg}>
        これは<span>テスト</span>です
      </Typography>
      <Share />
    </div>
  );
}

export default App;
