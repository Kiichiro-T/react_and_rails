import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  navroot: {
    display: 'block',
    width: '100%',
    position: "fixed",
    left: 0,
    bottom: 0,
    textAlign: 'center',
  },
  button: {
    maxWidth: '100%',
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.navroot}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} className={classes.button} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} className={classes.button} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} className={classes.button} />
    </BottomNavigation>
  )
}
