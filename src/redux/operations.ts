import { Dispatch } from 'redux';
import axios from 'axios';
import { IGetUsersAction, RootState } from '../interfaces/interfaces';
import { fetchUsers } from './slice';

export const getUsers = () => async (dispatch: Dispatch<IGetUsersAction>, getState: () => RootState) => {
  const { users: { since, perPage } } = getState();

  try {
    const response = await axios({
      method: 'get',
      url: `https://api.github.com/users?since=${since}&per_page=${perPage}`,
    });

    dispatch(fetchUsers(response.data));

  } catch (err) {
    console.log(err);
  }
};