import { Dispatch } from 'redux';
import axios from 'axios';
import { IGetUsersAction, RootState } from '../interfaces/interfaces';
import { fetchUsers, setCurrentUser } from './slice';

export const getUsers = () => async (dispatch: Dispatch<IGetUsersAction>, getState: () => RootState) => {
  const { users: { since, perPage } } = getState();

  try {
    const response = await axios({
      method: 'get',
      url: `https://api.github.com/users?since=${since}&per_page=${perPage}`,
      headers: { 'Authorization': 'Bearer cec9d20424264a3bc957ade7abd7cc4d13da8b26' }
    });

    dispatch(fetchUsers(response.data));

  } catch (err) {
    console.log(err);
  }
};

export const getUser = (login: string) => async (dispatch: Dispatch<IGetUsersAction>) => {
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.github.com/users/${login}`,
      headers: { 'Authorization': 'Bearer cec9d20424264a3bc957ade7abd7cc4d13da8b26' }
    });

    dispatch(setCurrentUser(response.data));

  } catch (err) {
    console.log(err);
  }
};