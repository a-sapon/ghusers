import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IconButton, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/operations';
import { RootState } from '../../interfaces/interfaces';
import styles from './User.module.css';

export const User = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    users: { currentUser },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getUser(location.state.login));
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const getCreatedAtDate = (data: string) => {
    const options = { month: 'long' };
    const date = new Date(data);
    const month = new Intl.DateTimeFormat('en-US', options).format(date);
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <>
      <IconButton onClick={goBack}>
        <ArrowBackIcon />
      </IconButton>
      {currentUser && (
        <div className={styles.container}>
          <img src={currentUser?.avatar_url} className={styles.avatar}></img>
          <div>
            <Typography gutterBottom variant='h5' component='h2'>
              {currentUser.name}
            </Typography>
            <div className={styles.contactInfo}>
              <Typography variant='body2' color='textSecondary' component='p'>
                @{currentUser.login}
              </Typography>
              {currentUser.email && (
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  className={styles.email}
                >
                  <EmailIcon />
                  {currentUser.email}
                </Typography>
              )}
            </div>
            <div className={styles.contactInfo}>
              <Typography variant='body2' color='textPrimary' component='p'>
                <b> {currentUser.followers}</b> followers
              </Typography>
              <Typography variant='body2' color='textPrimary' component='p'>
                <b>{currentUser.following}</b> following
              </Typography>
            </div>
            {(currentUser.company || currentUser.blog) && (
              <div className={styles.contactInfo}>
                {currentUser.company && (
                  <Typography variant='body2' color='textPrimary' component='p'>
                    Company: {currentUser.company}
                  </Typography>
                )}
                {currentUser.blog && (
                  <Typography variant='body2' color='textPrimary' component='p'>
                    {currentUser.blog}
                  </Typography>
                )}
              </div>
            )}
            {currentUser.location && (
              <div className={styles.contactInfo}>
                <Typography
                  variant='body2'
                  color='textPrimary'
                  component='p'
                  className={styles.location}
                >
                  <LocationOnIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                  {currentUser.location}
                </Typography>
              </div>
            )}
            <div className={styles.contactInfo}>
              <Typography
                variant='body2'
                color='textPrimary'
                component='p'
                className={styles.date}
              >
                <TodayIcon style={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                {getCreatedAtDate(currentUser.created_at)}
              </Typography>
            </div>
            {currentUser.bio && (
              <Typography variant='body2' color='textPrimary' component='p'>
                Bio: {currentUser.bio}
              </Typography>
            )}
          </div>
        </div>
      )}
    </>
  );
};
