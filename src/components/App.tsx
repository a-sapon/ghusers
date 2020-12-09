import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import { Users } from '../pages/users/Users';
import { User } from '../pages/user/User';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    usersIcon: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <AppBar position='static'>
          <Toolbar>
            <PeopleRoundedIcon className={classes.usersIcon} />
            <Typography variant='h6' className={classes.title}>
              GitHub Users
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Switch>
          <Route path='/users/:id' component={User} />
          <Route path='/users' component={Users} />
          <Redirect to='/users' />
        </Switch>
      </main>
    </div>
  );
};
