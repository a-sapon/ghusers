import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { getUsers } from '../../redux/operations';
import { setSince, setCurrentPage } from '../../redux/slice';
import { RootState } from '../../interfaces/interfaces';
import styles from './Users.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 345,
      maxWidth: 500,
    },
    card: {
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    large: {
      width: theme.spacing(12.5),
      height: theme.spacing(12.5),
    },
  })
);

export const Users = () => {
  const dispatch = useDispatch();
  const {users} = useSelector((state: RootState) => state);
  const classes = useStyles();
  const [page, setPage] = React.useState(users.currentPage);

  useEffect(() => {
    dispatch(getUsers());
  }, [page]);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const nextPage = users.perPage * page;
    dispatch(setSince(nextPage));
    dispatch(setCurrentPage(value));
  };

  return (
    <>
      <ul className={styles.users}>
        {users.users.map((user) => (
          <li key={user.id} className={styles.usersItem}>
            <Link
              to={{
                pathname: `/users/${user.login}`,
                state: { login: user.login },
              }}
            >
              <Card className={classes.root}>
                <CardActionArea className={classes.card}>
                  <Avatar
                    alt={user.login}
                    src={user.avatar_url}
                    className={classes.large}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      @{user.login}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {user.html_url}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        onChange={changePage}
        count={users.totalPages}
        shape='rounded'
        style={{marginLeft: 110, marginBottom: 40}}
      />
    </>
  );
};
