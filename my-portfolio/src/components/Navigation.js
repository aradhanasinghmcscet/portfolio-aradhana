import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const Navigation = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
