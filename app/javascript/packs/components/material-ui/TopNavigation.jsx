import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default function TopNavigation(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorE1, setAnchorE1] = React.useState(null);
  const open = Boolean(anchorE1);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  }

  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorE1(null);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <div className={classes.root}>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Tea Times Tokyo
              </Typography>
              {auth && (
                <div>
                  <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorE1}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
    </React.Fragment>
  )
}
